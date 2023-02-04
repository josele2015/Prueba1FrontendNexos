import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTransaccionesComponent } from './datos-transacciones.component';

describe('DatosTransaccionesComponent', () => {
  let component: DatosTransaccionesComponent;
  let fixture: ComponentFixture<DatosTransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosTransaccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
