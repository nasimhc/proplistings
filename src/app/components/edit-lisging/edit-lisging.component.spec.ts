import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLisgingComponent } from './edit-lisging.component';

describe('EditLisgingComponent', () => {
  let component: EditLisgingComponent;
  let fixture: ComponentFixture<EditLisgingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLisgingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLisgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
