import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DFooterComponent } from './dfooter.component';

describe('DFooterComponent', () => {
  let component: DFooterComponent;
  let fixture: ComponentFixture<DFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
