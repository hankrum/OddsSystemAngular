import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSportEventItemComponent } from './edit-sport-event-item.component';

describe('EditSportEventItemComponent', () => {
  let component: EditSportEventItemComponent;
  let fixture: ComponentFixture<EditSportEventItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSportEventItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSportEventItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
