import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rout1Component } from './rout1.component';

describe('Rout1Component', () => {
  let component: Rout1Component;
  let fixture: ComponentFixture<Rout1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rout1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
