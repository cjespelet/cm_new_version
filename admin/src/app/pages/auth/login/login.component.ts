import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@app/pages/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@app/shared/models/user.interface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  loginForm = this.fb.group({
    username: [''],
    password: [''],
  })

  constructor(private authSvc : AuthService, private fb: FormBuilder, private router : Router) { }
  
  ngOnInit(): void {
        
  }

  ngOnDestroy(): void {
    // this.subscription.forEach(sub => sub.unsubscribe())
    this.subscription.unsubscribe()
  }

  onLogin(): void {
    const formValue : User = {
      username : this.loginForm.value.username,
      password : this.loginForm.value.password
    };
    console.log(formValue)
    this.subscription.add( this.authSvc.login(formValue).subscribe((res) => {
      if(res) {
        this.router.navigate([''])
      }
    }))
}



}