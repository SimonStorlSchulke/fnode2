import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NodeBaseComponent } from './ui/node-base/node-base.component';
import { InputBaseComponent } from './ui/input-base/input-base.component';
import { InputColorComponent } from './ui/input-base/input-color/input-color.component';
import { SocketLinkComponent } from './ui/socket-link/socket-link.component';
import { OutputColorComponent } from './ui/output-base/output-color/output-color.component';
import { OutputBaseComponent } from './ui/output-base/output-base.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    InputBaseComponent,
    InputColorComponent,
    SocketLinkComponent,
    OutputColorComponent,
    OutputBaseComponent
  ],
  imports: [
    NodeBaseComponent,
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
