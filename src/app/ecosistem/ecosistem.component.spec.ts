import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosistemComponent } from './ecosistem.component';

describe('EcosistemComponent', () => {
  let component: EcosistemComponent;
  let fixture: ComponentFixture<EcosistemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcosistemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcosistemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
