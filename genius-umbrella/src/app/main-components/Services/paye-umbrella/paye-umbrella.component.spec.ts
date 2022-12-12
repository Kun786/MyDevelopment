import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeUmbrellaComponent } from './paye-umbrella.component';

describe('PayeUmbrellaComponent', () => {
  let component: PayeUmbrellaComponent;
  let fixture: ComponentFixture<PayeUmbrellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeUmbrellaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayeUmbrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
