import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandcraftersComponent } from './handcrafters.component';

describe('HandcraftersComponent', () => {
  let component: HandcraftersComponent;
  let fixture: ComponentFixture<HandcraftersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandcraftersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandcraftersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
