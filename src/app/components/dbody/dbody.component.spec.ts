import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DBodyComponent } from './dbody.component';

describe('DBodyComponent', () => {
  let component: DBodyComponent;
  let fixture: ComponentFixture<DBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
