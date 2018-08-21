import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandcrafterDetailShotsComponent } from './handcrafter-detail-shots.component';

describe('HandcrafterDetailShotsComponent', () => {
  let component: HandcrafterDetailShotsComponent;
  let fixture: ComponentFixture<HandcrafterDetailShotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandcrafterDetailShotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandcrafterDetailShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
