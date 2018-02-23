import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeNavLogoComponent } from './theme-nav-logo.component';

describe('ThemeNavLogoComponent', () => {
  let component: ThemeNavLogoComponent;
  let fixture: ComponentFixture<ThemeNavLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeNavLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeNavLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
