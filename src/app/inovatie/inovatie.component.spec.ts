import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InovatieComponent } from './inovatie.component';

describe('InovatieComponent', () => {
  let component: InovatieComponent;
  let fixture: ComponentFixture<InovatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InovatieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InovatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
