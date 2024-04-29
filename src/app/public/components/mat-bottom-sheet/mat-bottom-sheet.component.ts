import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {BottomSheetData} from "../../shared/types/bottom-sheet-data";
import {DataService} from "../../../core/services/data.service";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'custom-mat-bottom-sheet',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './mat-bottom-sheet.component.html',
  styleUrl: './mat-bottom-sheet.component.scss'
})
export class MatBottomSheetComponent<T> {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: BottomSheetData,private _bottomSheetRef:MatBottomSheetRef<MatBottomSheetComponent<T>>,protected dataService:DataService) {}

  close() {
    this._bottomSheetRef.dismiss();
  }
}
