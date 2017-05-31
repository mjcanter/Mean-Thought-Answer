import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { answerComponent } from './answer.component';

describe('answerComponent', () => {
  let component: answerComponent;
  let fixture: ComponentFixture<answerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ answerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(answerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
