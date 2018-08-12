import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShotComponent } from './new-shot.component';

describe('NewShotComponent', () => {
  let component: NewShotComponent;
  let fixture: ComponentFixture<NewShotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
