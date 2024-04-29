import { Component } from '@angular/core';
import {UserService} from "../../../core/services/user.service";
import {StorageService} from "../../../core/services/storage.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../public/shared/models/user.model";
import {Column} from "../../../public/shared/types/column";
import {Role} from "../../../public/shared/enums/role";
import {MatDialogComponent} from "../../../public/components/mat-dialog/mat-dialog.component";
import {AvaService} from "../../../core/services/ava.service";
import {AVA} from "../../../public/shared/models/ava.model";

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrl: './consult.component.scss'
})
export class ConsultComponent {
  constructor(private avaService:AvaService, private storageService: StorageService, private router: Router, private dialog: MatDialog) {
  }

  avas: Array<AVA> = [];

  tableColumns: Array<Column> = [
    {columnDef: 'id', header: 'No.', cell: (element: Record<string, number>) => `${this.avas.findIndex((ava) => ava.id === element['id']) + 1}`},
    {columnDef: 'fullname', header: 'Nom et Prénom', cell: (element: Record<string, string>) => `${element['nom']+' '+element['prenom']}`},
    {columnDef: 'etat', header: 'Etat', cell: (element: Record<string, Number>) => `${element['etat']===0?'non traité':element['etat']===1?'accepté':'refusé'}`},
    {columnDef: 'telephone', header: 'Num Téléphone', cell: (element: Record<string, number>) => `${element['telephone']}`},
    //{columnDef: 'role', header: 'Role', cell: (element: Record<string, Role>) => `${element['role']}`},
    {columnDef: 'settings', header: '', cell: (element: Record<string, any>) => `${element['settings']}`}
  ];

  addButton = {
    label: 'Ajouter Dossier',
    icon: 'create_new_folder',
    disabled: false
  }

  fetchUsers() {
    this.avaService.getAVAs().subscribe({
        next: (Response) => {
          //console.log(Response)
          this.avas = Response.avaDtos/*.filter(user => user.id != this.storageService.getUser().id)*/;
        }, error: err => {
          console.log("error is ", err)
        }
      }
    )
  }

  ngOnInit(): void {
    this.fetchUsers()
  }

  onDelete(id: number) {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: {
        title: "A.V.A",
        content: "Voulez-vous vraiment supprimer cette AVA ?",
        isLoading: false,
        onSubmit: () => this.deleteRow(id, dialogRef)
      }, autoFocus: false, panelClass: 'choice-dialog-container'
    });
  }

  deleteRow(id: number, dialogRef: MatDialogRef<MatDialogComponent>) {
    dialogRef.componentInstance.data.isLoading = true
    this.avaService.DeletAVA(id).subscribe({
        next: (Response) => {
          dialogRef.componentInstance.data.isLoading = false
          dialogRef.close()
          this.fetchUsers()
        }, error: err => {
          dialogRef.componentInstance.data.isLoading = false
          dialogRef.close()
          console.log("error is ", err)
        }
      }
    )
  }

}
