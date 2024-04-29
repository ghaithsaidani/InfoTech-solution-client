import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {MatSort, MatSortModule, Sort} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {AVA} from "../../shared/models/ava.model";
import {Column} from "../../shared/types/column";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {DataService} from "../../../core/services/data.service";
import {StorageService} from "../../../core/services/storage.service";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BottomSheetData} from "../../shared/types/bottom-sheet-data";
import {User} from "../../shared/models/user.model";
import {MatBottomSheetComponent} from "../mat-bottom-sheet/mat-bottom-sheet.component";
import {Role} from "../../shared/enums/role";
import {CommonModule} from "@angular/common";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatChipsModule} from "@angular/material/chips";

@Component({
  selector: 'custom-mat-table',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatSortModule, MatTableModule, MatIconModule, RouterLink, MatPaginatorModule, MatButtonModule, MatChipsModule ,MatTooltipModule
  ],
  templateUrl: './mat-table.component.html',
  styleUrl: './mat-table.component.scss'
})
export class MatTableComponent<T> implements OnChanges,OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('searchInput') myInput!: ElementRef;
  @Input() url: string = "";
  @Input() addButton: { label: string, icon: string, disabled: boolean } = {
    label: '',
    icon: '',
    disabled: false
  };
  @Input() hidden: boolean = true;
  @Input() payment: boolean = false;
  @Output() deleteRowEvent = new EventEmitter<number>();
  @Output() uploadDocumentsEvent = new EventEmitter<AVA>();
  @Output() acceptAVAEvent = new EventEmitter<number>();
  @Output() rejectAVAEvent = new EventEmitter<number>();
  @Output() searchEvent = new EventEmitter<string>();
  cant_access!: boolean
  searchKey: string = ''
  @Input() tableColumns: Array<Column> = [];
  @Input() tableData!: Array<T>;
  displayedColumns: Array<String> = []
  dataSource: MatTableDataSource<T> = new MatTableDataSource();
  @Input() bottomSheetManagement: 'normal' | 'account' = 'normal'

  constructor(private _liveAnnouncer: LiveAnnouncer, protected dataService: DataService, private storageService: StorageService, private _bottomSheet: MatBottomSheet) {
  }

  openBottomSheet(elem: T): void {
    let bottomSheetData: BottomSheetData;
    this.bottomSheetManagement === 'normal' ?
      bottomSheetData = {
        management: 'normal',
        url: this.url,
        tableRow: elem as User,
        delete: () => this.delete((elem as User).id),
      } :
      bottomSheetData = {
        management: 'ava',
        url: this.url,
        tableRow: elem as AVA,
        delete: () => this.delete((elem as AVA).id),
        uploadDocuments: () => this.uploadDocuments(elem as AVA),
        acceptAVA: () => this.acceptAVA((elem as AVA).id),
        rejectAVA: () => this.rejectAVA((elem as AVA).id)
      }
    this._bottomSheet.open(MatBottomSheetComponent, {
      data: bottomSheetData
    })
  }

  myClass(type: string): string {
    switch (type) {
      case Role.Admin:
        return 'admin-role-chip'
      case Role.Agent:
        return 'agent-role-chip'
      case Role.ServiceEtranger:
        return 'service-etranger-role-chip'
      case 'non traité':
        return 'pending-ava-chip'
      case 'refusé':
        return 'rejected-ava-chip'
      case 'accepté':
        return 'accepted-ava-chip'
      default:
        return ''

    }
  }

  clickSearchIcon() {
    this.hidden = !this.hidden
    if (!this.hidden)
      this.myInput.nativeElement.focus()
  }

  ngOnChanges(changes: any) {
    if (changes['tableData']) {
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      console.log("hey")
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit() {
    /*this.cant_access = this.dataService.isAdmin && this.url !== 'offices' && this.url !== 'users'
    if (this.cant_access && this.tableColumns.findIndex((column) => column.columnDef === 'settings') !== -1) {
      this.tableColumns = this.tableColumns.filter((column) => column.columnDef !== 'settings')
    }*/
    //this.tableColumns=this.tableColumns.filter((column) => column.columnDef !== 'taxe1')
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
    //console.log(this.dataService.isDirector && this.url==='payments')
  }

  search() {
    this.searchEvent.emit(this.searchKey)
  }

  delete(id: number) {
    this.deleteRowEvent.emit(id)
    this._bottomSheet.dismiss()
  }

  uploadDocuments(account: AVA) {
    this.uploadDocumentsEvent.emit(account)
  }

  acceptAVA(id: number) {
    this.acceptAVAEvent.emit(id)
    this._bottomSheet.dismiss()
  }

  rejectAVA(id: number) {
    this.rejectAVAEvent.emit(id)
    this._bottomSheet.dismiss()
  }

}
