import { Component, Input } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { DragService } from '../services/drag.service';


@Component({
  selector: 'ui-node-base',
  templateUrl: './node-base.component.html',
  styleUrls: ['./node-base.component.scss'],
  standalone: true,
  imports: [CdkDrag],
})
export class NodeBaseComponent {
  @Input() name: string = "Node Name";
  @Input() posX: number = 100;
  @Input() posY: number = 100;
  selected = false;

  constructor(protected dragService: DragService) {}

  select() {
    this.selected = !this.selected;
    console.log("Click")
  }
}
