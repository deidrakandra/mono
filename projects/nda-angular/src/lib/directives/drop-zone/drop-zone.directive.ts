import { Directive, EventEmitter } from "@angular/core";
import { DropFile } from "./drop-file.model";

@Directive({
  selector: 'div[dropZone]',
  outputs: ['dropped'],
  host: {
    '(dragenter)' : 'onDragOver($event)',
    '(dragover)' : 'onDragOver($event)',
    '(dragleave)' : 'onDragLeave($event)',
    '(drop)' : 'onDrop($event)',
    '[class.dragHover]' : 'hovering',
    '[class.dragHoverError]' : 'errorHovering'
  }
})
export class DropZoneDirective {
  dragHover: boolean;
  dragError: boolean;
  dropped: EventEmitter<DropFile> = new EventEmitter();

  onDragOver(evt: DragEvent) {
    this.dragHover = true;
    this.endEvent(evt);
  }

  onDragLeave(evt: DragEvent) {
    this.dragHover = false;
    this.endEvent(evt);
  }

  onDrop(evt: any) {
    this.dragHover = false;
    if (this.canDrop(evt)) {
      this.buildOutput(evt.dataTransfer);
    } else {
      this.dragError = true;
      window.setTimeout(() => {
          this.dragError = false;
      }, 1000);
    }
    this.endEvent(evt);
  }

  private buildOutput(dataTransfer: DataTransfer) {
    if (dataTransfer.items && dataTransfer.items.length > 0) {
      for (let i = 0; i < dataTransfer.items.length; i++) {
        this.addFiles(dataTransfer.items[i]);
      }
    } else {
      for (let i = 0; i < dataTransfer.files.length; i++) {
        const f: File = dataTransfer.files[i];
        if (this.isNotFolder(f)) {
          this.emit(f, f.name);
        }
      }
    }
  }

  private addFiles(dataItem: DataTransferItem): void {
    const item = dataItem.webkitGetAsEntry();
    if (item) {
      if (item.isDirectory) {
        this.handleDirectory(item);
      } else {
        item.file(f => { this.emit(f, item.fullPath) });
      }
    } else {
      const f: File = dataItem.getAsFile();
      this.emit(f, f['webkitRelativePath']);
    }
  }

  private handleDirectory(item: any) {
    item.createReader().readEntries(entries => {
      entries.forEach(e => {
        this.addFiles(e);
      });
    });
  }

  private emit(f: File, path: string): void {
    this.dropped.emit({
      file: f,
      path: path
    });
  }

  get hovering() {
    return this.dragHover;
  }

  get errorHovering() {
    return this.dragError;
  }

  private endEvent(evt: Event) {
    evt.stopPropagation();
    evt.preventDefault();
  }

  private canDrop(evt: DragEvent): boolean {
    if (evt.dataTransfer.files.length > 0) {
      return evt.dataTransfer.items != null || this.isNotFolder(evt.dataTransfer.files[0]);
    }
    return true;
  }

  private isNotFolder(file: File): boolean {
    return file.type !== '';
  }
}