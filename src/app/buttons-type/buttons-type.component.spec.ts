import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsTypeComponent } from './buttons-type.component';

describe('ButtonsTypeComponent', () => {
  let component: ButtonsTypeComponent;
  let fixture: ComponentFixture<ButtonsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
