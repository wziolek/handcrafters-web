import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandcrafterDetailComponent } from './handcrafter-detail.component';

describe('HandcrafterDetailComponent', () => {
  let component: HandcrafterDetailComponent;
  let fixture: ComponentFixture<HandcrafterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandcrafterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandcrafterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
