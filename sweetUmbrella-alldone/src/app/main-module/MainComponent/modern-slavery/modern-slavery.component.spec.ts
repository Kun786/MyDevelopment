import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernSlaveryComponent } from './modern-slavery.component';

describe('ModernSlaveryComponent', () => {
  let component: ModernSlaveryComponent;
  let fixture: ComponentFixture<ModernSlaveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernSlaveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernSlaveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
