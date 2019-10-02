import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterheadComponent } from './afterhead.component';

describe('AfterheadComponent', () => {
  let component: AfterheadComponent;
  let fixture: ComponentFixture<AfterheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
