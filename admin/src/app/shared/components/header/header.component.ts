import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '@app/pages/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription;
  isAdmin = true;
  isLogged = false;
  @Output() toggleSidenav = new EventEmitter<void>();
  username = localStorage.getItem('username') != null ? localStorage.getItem('username') : ''


  constructor(private authSvc : AuthService) { }

  ngOnInit(): void {
    this.subscription.add(
    this.authSvc.isLogged.subscribe((res) => {
      this.isLogged = res;      
    }))

  }

  ngOnDestroy(): void {
    // this.subscription.forEach(sub => sub.unsubscribe())
    this.subscription.unsubscribe()
  }

  onToggleSidenav() : void{
    this.toggleSidenav.emit();
  }

  onLogout() : void{
    this.authSvc.logout()
  }

}
