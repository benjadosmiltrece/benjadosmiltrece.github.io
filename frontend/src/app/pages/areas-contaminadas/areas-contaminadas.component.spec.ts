import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasContaminadasComponent } from './areas-contaminadas.component';

describe('AreasContaminadasComponent', () => {
  let component: AreasContaminadasComponent;
  let fixture: ComponentFixture<AreasContaminadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreasContaminadasComponent]
    });
    fixture = TestBed.createComponent(AreasContaminadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
