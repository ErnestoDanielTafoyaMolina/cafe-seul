import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeeProductsComponent } from './cofee-products.component';

describe('CofeeProductsComponent', () => {
  let component: CofeeProductsComponent;
  let fixture: ComponentFixture<CofeeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofeeProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofeeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
