import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {DialogData} from "../../shared/types/dialog-data";
import {MatButtonComponent} from "../mat-button/mat-button.component";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'custom-mat-dialog',
  standalone: true,
  imports: [
    MatButtonComponent,
    MatDialogActions,
    MatDialogTitle,
    MatDialogContent,
    MatButtonModule,
    MatDialogClose
  ],
  templateUrl: './mat-dialog.component.html',
  styleUrl: './mat-dialog.component.scss'
})
export class MatDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {

  }
}
