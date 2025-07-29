import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userviewmovies } from './userviewmovies';

describe('Userviewmovies', () => {
  let component: Userviewmovies;
  let fixture: ComponentFixture<Userviewmovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Userviewmovies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userviewmovies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
