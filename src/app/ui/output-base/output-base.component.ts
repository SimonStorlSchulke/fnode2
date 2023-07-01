import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'ui-output-base',
  templateUrl: './output-base.component.html',
  styleUrls: ['./output-base.component.scss']
})
export class OutputBaseComponent {
  @Input() name: string = "Output Name";
  color: string = "rgb(52, 250, 101)";

  @ViewChild('socket') socket!: ElementRef;

  constructor(public elRef: ElementRef){}

  //not working in socket-link-component. returns [undefined, undefined]..
  getSocketPos(): number[] {
    return [
      (this.socket?.nativeElement.getBoundingClientRect().left),
      (this.socket?.nativeElement.getBoundingClientRect().top),
    ]
  }
}
