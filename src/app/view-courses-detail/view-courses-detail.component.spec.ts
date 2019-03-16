import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCoursesDetailComponent } from './view-courses-detail.component';

describe('ViewCoursesDetailComponent', () => {
  let component: ViewCoursesDetailComponent;
  let fixture: ComponentFixture<ViewCoursesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCoursesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCoursesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
