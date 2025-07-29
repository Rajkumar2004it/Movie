import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmovies } from './viewmovies';

describe('Viewmovies', () => {
  let component: Viewmovies;
  let fixture: ComponentFixture<Viewmovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewmovies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewmovies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
