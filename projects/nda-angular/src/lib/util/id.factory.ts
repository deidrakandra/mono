import { Injectable } from "@angular/core";

@Injectable()
export class IDFactory {

  private MAX: number = 9999999999;
  private MIN: number = 1111111111;

  public getId(): number {
    return Math.floor(Math.random() * (this.MAX - this.MIN)) + this.MIN;
  }
}