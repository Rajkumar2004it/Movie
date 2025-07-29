import { TestBed } from '@angular/core/testing';

import { Mtservice } from './mtservice';

describe('Mtservice', () => {
  let service: Mtservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mtservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
