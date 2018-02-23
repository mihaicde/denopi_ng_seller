import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeNavHomeComponent } from './theme-nav-home.component';

describe('ThemeNavHomeComponent', () => {
  let component: ThemeNavHomeComponent;
  let fixture: ComponentFixture<ThemeNavHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeNavHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeNavHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
