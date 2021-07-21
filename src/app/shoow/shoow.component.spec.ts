import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoowComponent } from './shoow.component';

describe('ShoowComponent', () => {
  let component: ShoowComponent;
  let fixture: ComponentFixture<ShoowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
