import { Component, ElementRef, Input, OnInit, OnChanges, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ui-input-base',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.scss']
})
export class InputBaseComponent {
  @Input() name: string = "Input Name";
  @Input() defaultValue: any;
  @Input() color: string = "red";

  @Output() pos!: object;

  @ViewChild('.socket') socket!: ElementRef;

  constructor(public elRef: ElementRef) { }

  getSocketPos(): number[] {
    return [
      (this.socket.nativeElement.getBoundingClientRect().left),
      (this.socket.nativeElement.getBoundingClientRect().top),
    ]
  }
}
