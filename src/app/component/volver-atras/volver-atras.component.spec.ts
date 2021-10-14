import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolverAtrasComponent } from './volver-atras.component';

describe('VolverAtrasComponent', () => {
  let component: VolverAtrasComponent;
  let fixture: ComponentFixture<VolverAtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolverAtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolverAtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
