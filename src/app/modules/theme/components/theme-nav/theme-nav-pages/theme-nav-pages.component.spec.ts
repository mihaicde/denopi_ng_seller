import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeNavPagesComponent } from './theme-nav-pages.component';

describe('ThemeNavPagesComponent', () => {
  let component: ThemeNavPagesComponent;
  let fixture: ComponentFixture<ThemeNavPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeNavPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeNavPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
