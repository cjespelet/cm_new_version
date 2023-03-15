import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserListComponent } from '@app/shared/models/user.interface';
import { Subscription } from 'rxjs';
import { AdminUsersService } from '../../admin-users.service';
import { TranslateService } from "@ngx-translate/core";
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ButtonConfiguration, TableColumn } from '@app/modules/table/models/table-column';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription;
  constructor(private auSvc: AdminUsersService, private router : Router, private translate: TranslateService, private _liveAnnouncer: LiveAnnouncer) { 
    
    
  }
  dataSource: MatTableDataSource<UserListComponent> = new MatTableDataSource<UserListComponent>([]);
  tableColumn : TableColumn[] = [];
  definitionButton : ButtonConfiguration = {
    type : 'mat-raised-button',
    color: 'primary',
    action: 'redirect',
    goTo: 'admin-users-create',
    text: 'REGISTER',
    disabled: false
  };
  
  
  ngOnInit(): void {
    this.getList();
    this.setTableColumns()
    
  }

  setTableColumns() {
    this.tableColumn = [
      {label : 'CATEGORY', def : 'admin_category', dataKey : 'admin_category'},
      {label : 'USERNAME', def : 'email', dataKey : 'email'},
      {label : 'DISPLAY_NAME', def : 'first_name', dataKey : 'first_name'},
      {label : 'TICKET_OFFICE_SHORT', def : 'agency_name', dataKey : 'agency_name'},
      {label : 'ENABLED', def : 'enabled', dataKey : 'enabled', dataType : 'YesNo', format : 'Yes'},
    ]
  }   
   
  

  ngOnDestroy(): void {
    // this.subscription.forEach(sub => sub.unsubscribe())
    this.subscription.unsubscribe()
  }

  getList() : void {
    const formValue : User = {
      username : '',
      password : ''
    };
    this.subscription.add( this.auSvc.getUsersList(formValue).subscribe((res) => {
      console.log(res)
      if(res) {
        this.dataSource = new MatTableDataSource<UserListComponent>(res.list);
      }
    }))
  }

}
