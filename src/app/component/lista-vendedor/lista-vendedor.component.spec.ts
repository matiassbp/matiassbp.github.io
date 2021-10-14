import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVendedorComponent } from './lista-vendedor.component';

describe('ListaVendedorComponent', () => {
  let component: ListaVendedorComponent;
  let fixture: ComponentFixture<ListaVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
