import { Injectable, NgZone } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  readonly ipc: IpcRenderer | undefined;

  constructor(
    private zone: NgZone
  ) {
    if (window.require) {
      try {
        this.ipc = window.require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn(`Electron's IPC was not loaded`);
    }
  }

  public on(channel: string, listener: Function): void {
    if (this.ipc) {
      this.ipc.on(channel, (...args) => {
        this.zone.run(() => {
          listener.call(null, ...args)
        });
      });
    }
  }

  public send(channel: string, ...args): void {
    if (this.ipc) {
      this.ipc.send(channel, ...args);
    }
  }

  public isReady(): boolean {
    return this.ipc !== null;
  }
}
