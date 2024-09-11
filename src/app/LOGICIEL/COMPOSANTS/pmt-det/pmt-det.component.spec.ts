import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmtDetComponent } from './pmt-det.component';

describe('PmtDetComponent', () => {
  let component: PmtDetComponent;
  let fixture: ComponentFixture<PmtDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmtDetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmtDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
