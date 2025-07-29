import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Favdetails } from './favdetails';

describe('Favdetails', () => {
  let component: Favdetails;
  let fixture: ComponentFixture<Favdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Favdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Favdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
