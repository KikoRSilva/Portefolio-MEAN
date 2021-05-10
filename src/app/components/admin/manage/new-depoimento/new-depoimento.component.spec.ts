import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDepoimentoComponent } from './new-depoimento.component';

describe('NewDepoimentoComponent', () => {
  let component: NewDepoimentoComponent;
  let fixture: ComponentFixture<NewDepoimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDepoimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDepoimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
