import { DragService } from './../services/drag.service';
import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { InputBaseComponent } from '../input-base/input-base.component';
import { OutputBaseComponent } from '../output-base/output-base.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ui-socket-link', 
  templateUrl: './socket-link.component.html',
  styleUrls: ['./socket-link.component.scss']
})
export class SocketLinkComponent {
  @Input() socket1!: OutputBaseComponent;
  @Input() socket2!: InputBaseComponent;

  @ViewChild('#linkPath') linkPath!: SVGPathElement;
  @ViewChild('#linkPath', { read: ElementRef }) myChartContainer!: ElementRef;

  colorSocket1: string = "#ff0";
  colorSocket2: string = "#ff0";

  socket1El!: HTMLElement;
  socket2El!: HTMLElement;
  path!: SVGPathElement;
  static halfSocketRadius = 7;
  private subscriptions = new Subscription();

  constructor(private elRef: ElementRef, private dragService: DragService) { }

  ngAfterViewInit() {

    this.findHtmlElements();
    this.updatePath();

    console.log("this.colorSocket2:", this.socket1El.style)

    this.subscriptions.add(this.dragService.nodeDragged$.subscribe(() => {
      this.updatePath();
    }));


    this.colorSocket1 = this.socket1El.style.backgroundColor;
    this.colorSocket2 = this.socket2El.style.backgroundColor;

    this.elRef.nativeElement.querySelector(".stop1")!.setAttribute("stop-color", this.colorSocket1);
    this.elRef.nativeElement.querySelector(".stop2")!.setAttribute("stop-color", this.colorSocket2);
  }

  findHtmlElements() {
    this.socket1El = (this.socket1.elRef.nativeElement as HTMLElement).querySelector(".socket")!;
    this.socket2El = (this.socket2.elRef.nativeElement as HTMLElement).querySelector(".socket")!;
    this.path = this.elRef.nativeElement.querySelector("path");
  }

  updatePath() {
    const p1 = [
      this.socket1El.getBoundingClientRect().left + SocketLinkComponent.halfSocketRadius,
      this.socket1El.getBoundingClientRect().top + SocketLinkComponent.halfSocketRadius,
    ]

    const p2 = [
      this.socket2El.getBoundingClientRect().x + SocketLinkComponent.halfSocketRadius,
      this.socket2El.getBoundingClientRect().y + SocketLinkComponent.halfSocketRadius,
    ]

    const p1b = [
      (p1[0]! + p2[0]!) / 2,
      p1[1]!,
    ]

    const p2b = [
      (p1[0]! + p2[0]!) / 2,
      p2[1]!,
    ]

    console.log(p1b)

    this.path.setAttribute("d", `M ${p1[0]} ${p1[1]} C ${p1b[0]} ${p1b[1]} ${p2b[0]} ${p2b[1]} ${p2[0]} ${p2[1]}`);
    
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
