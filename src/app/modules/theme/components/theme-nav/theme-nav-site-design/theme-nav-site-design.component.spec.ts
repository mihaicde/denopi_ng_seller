import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeNavSiteDesignComponent } from './theme-nav-site-design.component';

describe('ThemeNavSiteDesignComponent', () => {
  let component: ThemeNavSiteDesignComponent;
  let fixture: ComponentFixture<ThemeNavSiteDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeNavSiteDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeNavSiteDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
