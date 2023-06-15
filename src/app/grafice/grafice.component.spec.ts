import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficeComponent } from './grafice.component';

describe('GraficeComponent', () => {
  let component: GraficeComponent;
  let fixture: ComponentFixture<GraficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
