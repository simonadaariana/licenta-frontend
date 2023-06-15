import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatiuniComponent } from './operatiuni.component';

describe('OperatiuniComponent', () => {
  let component: OperatiuniComponent;
  let fixture: ComponentFixture<OperatiuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatiuniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatiuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
