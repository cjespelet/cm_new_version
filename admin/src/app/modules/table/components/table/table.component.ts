import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserListComponent } from '@app/shared/models/user.interface';
import { TranslateService } from '@ngx-translate/core';
import { ButtonConfiguration, TableColumn } from '../../models/table-column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements  AfterViewInit {

  constructor(private router : Router, private translate: TranslateService, private _liveAnnouncer: LiveAnnouncer) { }


  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<UserListComponent> = new MatTableDataSource<UserListComponent>([]);
  tableColumns : TableColumn[] = [];
  definitionButtonEdit : ButtonConfiguration = {
    type : 'mat-icon-button',
    color: 'primary',
    action: 'register',
    text: 'edit'
  };
  definitionButtonRemove: ButtonConfiguration = {
    type : 'mat-icon-button',
    color: 'warn',
    action: 'register',
    text: 'delete'
  };

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() set columns(columns:TableColumn[]) {
    this.tableColumns = columns;
    this.displayedColumns = this.tableColumns.map(col => col.def)
    this.displayedColumns.push('buttons')
  }
  @Input() set data(data: any) {
    this.dataSource = data;
  } 

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource.sort)
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: any) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.

    console.log(sortState)
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
