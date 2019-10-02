import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyooComponent } from './ayoo.component';

describe('AyooComponent', () => {
  let component: AyooComponent;
  let fixture: ComponentFixture<AyooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
