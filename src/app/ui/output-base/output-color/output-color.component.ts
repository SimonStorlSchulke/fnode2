import { Component } from '@angular/core';
import { OutputBaseComponent } from '../output-base.component';

@Component({
  selector: 'ui-output-color',
  templateUrl: './output-color.component.html',
  styleUrls: ['./output-color.component.scss',  '../output-base.component.scss']
})
export class OutputColorComponent extends OutputBaseComponent {
  override color: string = "rgb(52, 250, 101)";

}
