import { TestBed } from '@angular/core/testing';

import { Ventas2Service } from './ventas2.service';

describe('Ventas2Service', () => {
  let service: Ventas2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ventas2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
