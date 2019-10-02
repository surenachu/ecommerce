import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SboxComponent } from './sbox.component';

describe('SboxComponent', () => {
  let component: SboxComponent;
  let fixture: ComponentFixture<SboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
