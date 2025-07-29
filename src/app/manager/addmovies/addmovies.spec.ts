import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addmovies } from './addmovies';

describe('Addmovies', () => {
  let component: Addmovies;
  let fixture: ComponentFixture<Addmovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addmovies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addmovies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
