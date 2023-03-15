import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserResponse } from '@app/shared/models/user.interface';
import { catchError, Observable,map, throwError, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from  '@auth0/angular-jwt';
import{ Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false)
  get isLogged() : Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(private http:HttpClient, private router : Router) { 
    this.checkToken()
  }

  login(authData:User) : Observable<UserResponse | void> {
    let option = {
      headers : new HttpHeaders({ 'app-codename': 'AEH-ADMIN', 'Referer' : 'aeh-admin.woow.no', 'origin' : 'https://aeh-admin.woow.no' })
    }
    return this.http.post<UserResponse>(`${environment.API_URL}/users/adminLogin`,authData, option)
    .pipe(
      map((res:UserResponse)=>{
        this.saveToken(res)
        this.loggedIn.next(true);
        return res;        
      }),
      catchError((err) =>  this.handlerRrror(err))
    )
  }

  logout() : void {
    localStorage.setItem('isLogged','false')
    localStorage.removeItem('userNick')
    localStorage.removeItem('username')
    localStorage.removeItem('category');
    localStorage.clear();
    this.loggedIn.next(false)
    this.router.navigate(['/login'])

  }
  private checkToken() : void {
    //const userToken = localStorage.getItem('userToken');
    //const isExpired = helper.isTokenExpired(userToken)
    //console.log('isExpired->', isExpired)
    // if(isExpired) {
    //   this.logout()
    // }
    // else{
    //   this.loggedIn,next(true)
    // }

    const userLogged = localStorage.getItem('isLogged')
    if(userLogged == 'true') {
      this.loggedIn.next(true)
    }
    else{
      this.logout()
    }
    console.log('is User Logged -> ', userLogged)
    
  }

  private saveToken(res:UserResponse) : void {
    localStorage.setItem('isLogged', 'true');
    localStorage.setItem('userNick',res.firstName)
    localStorage.setItem('username',res.username)
    localStorage.setItem('category','' + res.category + '')
    localStorage.setItem('userToken',res.username)
    //we need generate in node a token with Jwtoken

  }

  private handlerRrror(err: any) : Observable<never> {
    let errMessage = 'An ocurred retriving data';
    if(err) {
      errMessage = `Error: code ${err.mesagge}`
    }

    window.alert(errMessage)
    return throwError(errMessage)

  }
}