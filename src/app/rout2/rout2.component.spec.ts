import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rout2Component } from './rout2.component';

describe('Rout2Component', () => {
  let component: Rout2Component;
  let fixture: ComponentFixture<Rout2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rout2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
