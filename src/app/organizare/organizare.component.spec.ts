import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizareComponent } from './organizare.component';

describe('OrganizareComponent', () => {
  let component: OrganizareComponent;
  let fixture: ComponentFixture<OrganizareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
