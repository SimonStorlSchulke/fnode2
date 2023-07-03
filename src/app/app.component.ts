import { Component, HostListener, ViewChild } from '@angular/core';
import { DragService } from './ui/services/drag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'antest';

  constructor(protected dragService: DragService) {}

  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
    event.preventDefault();
    this.dragService.zoom(event.deltaY * 0.001);
  }
  
}
