import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLisgingComponent } from './add-lisging.component';

describe('AddLisgingComponent', () => {
  let component: AddLisgingComponent;
  let fixture: ComponentFixture<AddLisgingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLisgingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLisgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
