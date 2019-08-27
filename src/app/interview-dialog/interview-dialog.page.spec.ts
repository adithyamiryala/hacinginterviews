import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewDialogPage } from './interview-dialog.page';

describe('InterviewDialogPage', () => {
  let component: InterviewDialogPage;
  let fixture: ComponentFixture<InterviewDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewDialogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
