import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVendedorComponent } from './home-vendedor.component';

describe('HomeVendedorComponent', () => {
  let component: HomeVendedorComponent;
  let fixture: ComponentFixture<HomeVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
