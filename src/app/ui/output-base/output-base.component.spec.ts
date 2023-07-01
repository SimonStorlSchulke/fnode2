import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBaseComponent } from './output-base.component';

describe('OutputBaseComponent', () => {
  let component: OutputBaseComponent;
  let fixture: ComponentFixture<OutputBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
