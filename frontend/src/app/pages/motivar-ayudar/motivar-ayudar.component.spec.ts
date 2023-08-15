import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivarAyudarComponent } from './motivar-ayudar.component';

describe('MotivarAyudarComponent', () => {
  let component: MotivarAyudarComponent;
  let fixture: ComponentFixture<MotivarAyudarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotivarAyudarComponent]
    });
    fixture = TestBed.createComponent(MotivarAyudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
