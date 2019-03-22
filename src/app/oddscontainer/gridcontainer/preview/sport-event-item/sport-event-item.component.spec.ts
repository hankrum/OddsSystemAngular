import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportEventItemComponent } from './sport-event-item.component';

describe('SportEventItemComponent', () => {
  let component: SportEventItemComponent;
  let fixture: ComponentFixture<SportEventItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportEventItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportEventItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
