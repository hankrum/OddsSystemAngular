import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcontainerComponent } from './gridcontainer.component';

describe('GridcontainerComponent', () => {
  let component: GridcontainerComponent;
  let fixture: ComponentFixture<GridcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
