import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocalComponent } from './create-local.component';

describe('CreateLocalComponent', () => {
  let component: CreateLocalComponent;
  let fixture: ComponentFixture<CreateLocalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLocalComponent]
    });
    fixture = TestBed.createComponent(CreateLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
