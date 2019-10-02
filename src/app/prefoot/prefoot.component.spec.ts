import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefootComponent } from './prefoot.component';

describe('PrefootComponent', () => {
  let component: PrefootComponent;
  let fixture: ComponentFixture<PrefootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
