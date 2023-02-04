import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTarjetasComponent } from './datos-tarjetas.component';

describe('DatosTarjetasComponent', () => {
  let component: DatosTarjetasComponent;
  let fixture: ComponentFixture<DatosTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosTarjetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
