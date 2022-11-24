import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserList } from '@app/shared/models/user.interface';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  constructor(private http:HttpClient, private router : Router) { }

  getUsersList(authData:User) : Observable<UserList | void> {
    return this.http.post<UserList>(`${environment.API_URL}/users/getUserList`,authData)
    .pipe(
      map((res:UserList)=>{
        return res;        
      }),
      catchError(async (err) => this.handlerRrror(err))
    )
  }
  handlerRrror(err: any) {
    throw new Error('Method not implemented.');
  }
}
