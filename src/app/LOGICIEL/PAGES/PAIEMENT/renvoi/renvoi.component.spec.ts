import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenvoiComponent } from './renvoi.component';

describe('RenvoiComponent', () => {
  let component: RenvoiComponent;
  let fixture: ComponentFixture<RenvoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenvoiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RenvoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
