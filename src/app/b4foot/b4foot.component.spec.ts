import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B4footComponent } from './b4foot.component';

describe('B4footComponent', () => {
  let component: B4footComponent;
  let fixture: ComponentFixture<B4footComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B4footComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B4footComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
