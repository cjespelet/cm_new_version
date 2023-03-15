import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ButtonConfiguration } from '@app/modules/table/models/table-column';
import { AdminUsersService } from '@app/pages/admin-users.service';
import { Agency, Category, Food, kiosk, Shop,  User, UserInfo } from '@app/shared/models/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-users-create',
  templateUrl: './admin-users-create.component.html',
  styleUrls: ['./admin-users-create.component.scss']
})
export class AdminUsersCreateComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription;
  contactForm: FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]]
  })

  userInfo! : UserInfo;
  categorySelected! : Category;
  agencySelected! : Agency;
  kioskSelected! : kiosk;
  shopSelected! : Shop;

  definitionButton : ButtonConfiguration = {
    type : 'mat-raised-button',
    color: 'primary',
    action: 'onSubmit',
    goTo: 'admin-users-create',
    text: 'SAVE',
    typeButton: 'submit',
    // disabled: this.contactForm.invalid,
    disabled:false,
    class: 'float-left'
  };
  definitionButtonCancel : ButtonConfiguration = {
    type : 'mat-raised-button',
    color: '',
    action: 'redirect',
    goTo: 'admin-users-create',
    text: 'CANCEL',
    class: 'float-left',
    disabled : false
  };

  constructor(private readonly fb: FormBuilder, private auSvc: AdminUsersService ) { }

  ngOnInit(): void {
    this.getUserInfo()
    this.contactForm = this.initForm();
    console.log("userInfo", this.userInfo);
  }

  ngOnDestroy(): void {
    // this.subscription.forEach(sub => sub.unsubscribe())
    this.subscription.unsubscribe()
  }

  onSubmit():void{
    console.log('form ->', this.contactForm.value)
  }

  initForm():FormGroup {
    return this.fb.group({
      name: ['',[Validators.required, Validators.minLength(4)]],
      userCategory: ['',[Validators.required]],
      username : ['',[Validators.required, Validators.minLength(5), Validators.pattern('A-z,0-9')]],
      password : ['',[Validators.required, Validators.minLength(6), Validators.pattern('A-z,0-9,!,_,-,.')]],
      repeatPassword : ['',[Validators.required, Validators.minLength(6), Validators.pattern('A-z,0-9,!,_,-,.')]],
      enabled: [true]

    },{
      validator: this.confirmedValidator('password', 'repeatPassword')
    })

  }


  confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

 
  getUserInfo() : void {
    const formValue : User = {
      username : '',
      password : '',
      id : 0,
      includeCombos:true
    };
    this.subscription.add( this.auSvc.getUserInfo(formValue).subscribe((res) => {
      console.log(res)
      if(res) {
        this.userInfo = res;
        this.categorySelected = this.userInfo.categories[0];
        this.agencySelected = this.userInfo.agencies[0];
      }
    }))
  }

}