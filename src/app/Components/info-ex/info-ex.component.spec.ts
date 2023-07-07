import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoExComponent } from './info-ex.component';

describe('InfoExComponent', () => {
  let component: InfoExComponent;
  let fixture: ComponentFixture<InfoExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoExComponent]
    });
    fixture = TestBed.createComponent(InfoExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
