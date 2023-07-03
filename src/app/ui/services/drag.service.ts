import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragService {

  public nodeDragged$: EventEmitter<void>;
  zoomFactor = 1;

    constructor() {
        this.nodeDragged$ = new EventEmitter();
    }

    public drag(): void {
        this.nodeDragged$.emit();
    }

    public zoom(delta: number) {
      const maxZoom = 1.75;
      const minZoom = 0.25;
      this.zoomFactor = Math.max(Math.min(this.zoomFactor - delta, maxZoom), minZoom);
    }
}
