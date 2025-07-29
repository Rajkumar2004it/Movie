import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mandetails } from './mandetails';

describe('Mandetails', () => {
  let component: Mandetails;
  let fixture: ComponentFixture<Mandetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mandetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mandetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
