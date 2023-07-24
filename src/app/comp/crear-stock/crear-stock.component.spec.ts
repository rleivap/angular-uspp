import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearStockComponent } from './crear-stock.component';

describe('CrearStockComponent', () => {
  let component: CrearStockComponent;
  let fixture: ComponentFixture<CrearStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
