import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedieComponent } from './medie.component';

describe('MedieComponent', () => {
  let component: MedieComponent;
  let fixture: ComponentFixture<MedieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
