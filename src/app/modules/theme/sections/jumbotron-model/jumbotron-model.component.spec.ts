import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronModelComponent } from './jumbotron-model.component';

describe('JumbotronModelComponent', () => {
  let component: JumbotronModelComponent;
  let fixture: ComponentFixture<JumbotronModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
