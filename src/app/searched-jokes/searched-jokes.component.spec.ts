import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedJokesComponent } from './searched-jokes.component';

describe('SearchedJokesComponent', () => {
  let component: SearchedJokesComponent;
  let fixture: ComponentFixture<SearchedJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
