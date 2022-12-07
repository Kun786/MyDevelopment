import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayaComponent } from './paya.component';

describe('PayaComponent', () => {
  let component: PayaComponent;
  let fixture: ComponentFixture<PayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
