import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormComponent } from './mat-form.component';

describe('MatFormComponent', () => {
  let component: MatFormComponent;
  let fixture: ComponentFixture<MatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
