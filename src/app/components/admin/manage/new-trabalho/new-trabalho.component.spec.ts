import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrabalhoComponent } from './new-trabalho.component';

describe('NewTrabalhoComponent', () => {
  let component: NewTrabalhoComponent;
  let fixture: ComponentFixture<NewTrabalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTrabalhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
