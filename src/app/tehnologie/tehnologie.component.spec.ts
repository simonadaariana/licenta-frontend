import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TehnologieComponent } from './tehnologie.component';

describe('TehnologieComponent', () => {
  let component: TehnologieComponent;
  let fixture: ComponentFixture<TehnologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TehnologieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TehnologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
