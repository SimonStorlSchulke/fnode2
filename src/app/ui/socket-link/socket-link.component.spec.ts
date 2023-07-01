import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketLinkComponent } from './socket-link.component';

describe('SocketLinkComponent', () => {
  let component: SocketLinkComponent;
  let fixture: ComponentFixture<SocketLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocketLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocketLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
