import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddscontainerComponent } from './oddscontainer.component';

describe('OddscontainerComponent', () => {
  let component: OddscontainerComponent;
  let fixture: ComponentFixture<OddscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
