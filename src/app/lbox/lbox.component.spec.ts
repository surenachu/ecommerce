import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LboxComponent } from './lbox.component';

describe('LboxComponent', () => {
  let component: LboxComponent;
  let fixture: ComponentFixture<LboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
