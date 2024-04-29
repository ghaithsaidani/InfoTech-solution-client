import {Component, OnInit} from '@angular/core';
import {Column} from "../../../public/shared/types/column";
import {User} from "../../../public/shared/models/user.model";
import {Role} from "../../../public/shared/enums/role";
import {UserService} from "../../../core/services/user.service";
import {StorageService} from "../../../core/services/storage.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatDialogComponent} from "../../../public/components/mat-dialog/mat-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'users-consult',
  templateUrl: './consult.component.html',
  styleUrl: './consult.component.scss'
})
export class ConsultComponent implements OnInit{

  constructor(private userService:UserService, private storageService: StorageService, private router: Router, private dialog: MatDialog) {
  }

  users: Array<User> = [];

  tableColumns: Array<Column> = [
    {columnDef: 'id', header: 'No.', cell: (element: Record<string, number>) => `${this.users.findIndex((user) => user.id === element['id']) + 1}`},
    {columnDef: 'firstName', header: 'Nom et Prénom', cell: (element: Record<string, string>) => `${element['firstName']+' '+element['lastName']}`},
    {columnDef: 'email', header: 'Email', cell: (element: Record<string, String>) => `${element['email']}`},
    {columnDef: 'phone', header: 'Num Téléphone', cell: (element: Record<string, number>) => `${element['phone']}`},
    {columnDef: 'role', header: 'Role', cell: (element: Record<string, Role>) => `${element['role']}`},
    {columnDef: 'settings', header: '', cell: (element: Record<string, any>) => `${element['settings']}`}
  ];

  addButton = {
    label: 'Ajouter Utilisateur',
    icon: 'group_add',
    disabled: false
  }

  fetchUsers() {
      this.userService.getUsers().subscribe({
          next: (Response) => {
            //console.log(Response)
            this.users = Response.userDtos/*.filter(user => user.id != this.storageService.getUser().id)*/;
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
        title: "Utilisateurs",
        content: "Voulez-vous vraiment supprimer cet utilisateur ?",
        isLoading: false,
        onSubmit: () => this.deleteRow(id, dialogRef)
      }, autoFocus: false, panelClass: 'choice-dialog-container'
    });
  }

  deleteRow(id: number, dialogRef: MatDialogRef<MatDialogComponent>) {
    dialogRef.componentInstance.data.isLoading = true
    this.userService.DeletUser(id).subscribe({
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
