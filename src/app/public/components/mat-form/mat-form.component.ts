import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Column} from "../../shared/types/column";
import {MyForm} from "../../shared/types/my-form";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonComponent} from "../mat-button/mat-button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'custom-mat-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonComponent,
    RouterLink
  ],
  templateUrl: './mat-form.component.html',
  styleUrl: './mat-form.component.scss'
})
export class MatFormComponent {
  @Input() myForm!: MyForm
  @Input() return_link!: string
  @Input() updateForm = false
  @Input() addForm = false
  @Input() report: boolean = false
  @Output() onSubmitEvent = new EventEmitter<FormGroup>();
  @Output() handleFileInputChangeEvent = new EventEmitter<FileList | null>();
  @Input() tableColumns: Array<Column> = [];

  onSubmit() {
    this.onSubmitEvent.emit(this.myForm.formGroup)
  }

  handleFileInputChange(l: FileList | null): void {
    this.handleFileInputChangeEvent.emit(l)
  }
}
