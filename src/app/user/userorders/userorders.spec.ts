import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userorders } from './userorders';

describe('Userorders', () => {
  let component: Userorders;
  let fixture: ComponentFixture<Userorders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Userorders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userorders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
