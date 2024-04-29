import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBottomSheetComponent } from './mat-bottom-sheet.component';

describe('MatBottomSheetComponent', () => {
  let component: MatBottomSheetComponent;
  let fixture: ComponentFixture<MatBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBottomSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
