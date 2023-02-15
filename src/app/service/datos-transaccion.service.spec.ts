import { TestBed } from '@angular/core/testing';

import { DatosTransaccionService } from './datos-transaccion.service';

describe('DatosTransaccionService', () => {
  let service: DatosTransaccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosTransaccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
