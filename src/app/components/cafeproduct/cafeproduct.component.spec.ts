import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeproductComponent } from './cafeproduct.component';

describe('CafeproductComponent', () => {
  let component: CafeproductComponent;
  let fixture: ComponentFixture<CafeproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
