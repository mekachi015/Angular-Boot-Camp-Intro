import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiterPageComponent } from './regiter-page.component';

describe('RegiterPageComponent', () => {
  let component: RegiterPageComponent;
  let fixture: ComponentFixture<RegiterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegiterPageComponent]
    });
    fixture = TestBed.createComponent(RegiterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
