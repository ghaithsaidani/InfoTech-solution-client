import {Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'custom-mat-button',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './mat-button.component.html',
  styleUrl: './mat-button.component.scss'
})
export class MatButtonComponent {
  @Input() label!: string ;
  @Input() type!: string;
  @Input() color!: string;
  @Input() isLoading!: boolean;
  @Input() classList!:string
  @Input() icon!: string
  @Input() disabled: boolean=false;
  constructor() {
  }
}
