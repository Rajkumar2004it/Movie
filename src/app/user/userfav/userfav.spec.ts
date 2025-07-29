import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userfav } from './userfav';

describe('Userfav', () => {
  let component: Userfav;
  let fixture: ComponentFixture<Userfav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Userfav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userfav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
