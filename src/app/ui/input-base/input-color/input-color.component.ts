import { Component } from '@angular/core';
import { InputBaseComponent } from '../input-base.component';

@Component({
  selector: 'ui-input-color',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.scss', '../input-base.component.scss']
})
export class InputColorComponent extends InputBaseComponent {}
