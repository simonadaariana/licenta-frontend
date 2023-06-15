import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitatiComponent } from './abilitati.component';

describe('AbilitatiComponent', () => {
  let component: AbilitatiComponent;
  let fixture: ComponentFixture<AbilitatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilitatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilitatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
