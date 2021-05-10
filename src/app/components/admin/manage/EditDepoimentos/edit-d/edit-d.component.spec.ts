import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDComponent } from './edit-d.component';

describe('EditDComponent', () => {
  let component: EditDComponent;
  let fixture: ComponentFixture<EditDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
