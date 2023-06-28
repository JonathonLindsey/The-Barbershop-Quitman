import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenComponent } from './open.component';

describe('OpenComponent', () => {
  let component: OpenComponent;
  let fixture: ComponentFixture<OpenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenComponent]
    });
    fixture = TestBed.createComponent(OpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
