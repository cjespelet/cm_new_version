import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/shared/models/user.interface';
import { Subscription } from 'rxjs';
import { AdminUsersService } from '../admin-users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription;
  constructor(private auSvc: AdminUsersService, private router : Router) { }

  ngOnInit(): void {
    this.getList();
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
        this.router.navigate([''])
      }
    }))
  }

}
