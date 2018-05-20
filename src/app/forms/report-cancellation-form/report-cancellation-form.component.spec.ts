import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCancellationFormComponent } from './report-cancellation-form.component';

describe('ReportCancellationFormComponent', () => {
  let component: ReportCancellationFormComponent;
  let fixture: ComponentFixture<ReportCancellationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCancellationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCancellationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
