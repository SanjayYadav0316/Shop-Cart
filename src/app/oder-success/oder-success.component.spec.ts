import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderSuccessComponent } from './oder-success.component';

describe('OderSuccessComponent', () => {
  let component: OderSuccessComponent;
  let fixture: ComponentFixture<OderSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
