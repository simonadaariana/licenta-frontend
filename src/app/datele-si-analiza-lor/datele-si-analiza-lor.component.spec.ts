import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateleSiAnalizaLorComponent } from './datele-si-analiza-lor.component';

describe('DateleSiAnalizaLorComponent', () => {
  let component: DateleSiAnalizaLorComponent;
  let fixture: ComponentFixture<DateleSiAnalizaLorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateleSiAnalizaLorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateleSiAnalizaLorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
