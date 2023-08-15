import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciclarBasuraComponent } from './reciclar-basura.component';

describe('ReciclarBasuraComponent', () => {
  let component: ReciclarBasuraComponent;
  let fixture: ComponentFixture<ReciclarBasuraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReciclarBasuraComponent]
    });
    fixture = TestBed.createComponent(ReciclarBasuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
