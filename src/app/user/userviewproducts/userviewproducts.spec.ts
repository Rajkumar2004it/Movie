import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userviewproducts } from './userviewproducts';

describe('Userviewproducts', () => {
  let component: Userviewproducts;
  let fixture: ComponentFixture<Userviewproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Userviewproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userviewproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
