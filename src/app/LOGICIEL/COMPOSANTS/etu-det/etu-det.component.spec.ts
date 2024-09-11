import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtuDetComponent } from './etu-det.component';

describe('EtuDetComponent', () => {
  let component: EtuDetComponent;
  let fixture: ComponentFixture<EtuDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtuDetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtuDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
