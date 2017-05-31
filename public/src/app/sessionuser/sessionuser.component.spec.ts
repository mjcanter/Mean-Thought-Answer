import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionuserComponent } from './sessionuser.component';

describe('SessionuserComponent', () => {
  let component: SessionuserComponent;
  let fixture: ComponentFixture<SessionuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
