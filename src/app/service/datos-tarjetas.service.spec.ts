import { TestBed } from '@angular/core/testing';

import { DatosTarjetasService } from './datos-tarjetas.service';

describe('DatosTarjetasService', () => {
  let service: DatosTarjetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosTarjetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
