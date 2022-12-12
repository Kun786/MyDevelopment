import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartContractingComponent } from './start-contracting.component';

describe('StartContractingComponent', () => {
  let component: StartContractingComponent;
  let fixture: ComponentFixture<StartContractingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartContractingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartContractingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
