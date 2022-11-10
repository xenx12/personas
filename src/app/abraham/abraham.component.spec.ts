import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrahamComponent } from './abraham.component';

describe('AbrahamComponent', () => {
  let component: AbrahamComponent;
  let fixture: ComponentFixture<AbrahamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrahamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbrahamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
