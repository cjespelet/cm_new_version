import { Component } from '@angular/core';
import { AuthService } from './pages/auth.service';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';
  isLogged = false;

  constructor(private authSvc : AuthService, private translate: TranslateService) { 
    this.setAppLanguage()
  }

  ngOnInit(): void {
    this.authSvc.isLogged.subscribe((res) => {
      this.isLogged = res;      
    })

  }

  setAppLanguage() {
    this.translate.setDefaultLang('no');
    this.translate.use('no')
    // this.translate.use(this.translate.getBrowserLang(''))
  }

}
