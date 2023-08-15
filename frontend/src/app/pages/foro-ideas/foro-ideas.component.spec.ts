import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoIdeasComponent } from './foro-ideas.component';

describe('ForoIdeasComponent', () => {
  let component: ForoIdeasComponent;
  let fixture: ComponentFixture<ForoIdeasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForoIdeasComponent]
    });
    fixture = TestBed.createComponent(ForoIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
