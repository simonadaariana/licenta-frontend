import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperientaClientilorComponent } from './experienta-clientilor.component';

describe('ExperientaClientilorComponent', () => {
  let component: ExperientaClientilorComponent;
  let fixture: ComponentFixture<ExperientaClientilorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperientaClientilorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperientaClientilorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
