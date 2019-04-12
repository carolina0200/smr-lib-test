import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmrLibComponent } from './smr-lib.component';

describe('SmrLibComponent', () => {
  let component: SmrLibComponent;
  let fixture: ComponentFixture<SmrLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmrLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmrLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
