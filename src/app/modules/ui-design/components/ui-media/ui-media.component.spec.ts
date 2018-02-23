import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMediaComponent } from './ui-media.component';

describe('UiMediaComponent', () => {
  let component: UiMediaComponent;
  let fixture: ComponentFixture<UiMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
