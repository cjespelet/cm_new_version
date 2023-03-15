import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserInfo, UserList } from '@app/shared/models/user.interface';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {
  headers: Headers = new Headers();
  constructor(private http:HttpClient, private router : Router) { 
    
  }

  getUsersList(authData:User) : Observable<UserList | void> {
    let option = {
      headers : new HttpHeaders({ 'app-codename': 'AEH-ADMIN', 'Referer' : 'aeh-admin.woow.no', 'origin' : 'https://aeh-admin.woow.no' })
    }
    return this.http.post<UserList>(`${environment.API_URL}/users/getUserList`,authData, option)
    .pipe(
      map((res:UserList)=>{
        return res;        
      }),
      catchError(async (err) => this.handlerRrror(err))
    )
  }
  getUserInfo(authData:User) : Observable<UserInfo | void> {
    let option = {
      headers : new HttpHeaders({ 'app-codename': 'AEH-ADMIN', 'Referer' : 'aeh-admin.woow.no', 'origin' : 'https://aeh-admin.woow.no' })
    }
    return this.http.post<UserInfo>(`${environment.API_URL}/users/getUserInfo`,authData, option)
    .pipe(
      map((res:UserInfo)=>{
        return res;        
      }),
      catchError(async (err) => this.handlerRrror(err))
    )
  }


  handlerRrror(err: any) {
    throw new Error('Method not implemented.');
  }
}
