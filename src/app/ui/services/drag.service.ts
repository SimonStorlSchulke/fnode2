import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragService {

  public nodeDragged$: EventEmitter<void>;

    constructor() {
        this.nodeDragged$ = new EventEmitter();
    }

    public drag(): void {
        this.nodeDragged$.emit();
    }
}
