
import { Role } from './models/role';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = environment.api;
  private httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  
  };
  constructor( private httpClient: HttpClient) { }
  
  public getAllRoles(): Observable<Role[]>{
    const url =`${this.REST_API_SERVER}/role`;
    return this.httpClient.get<Role[]>(url, this.httpOptions);
  }

  public postRole(payload: Role): Observable<Role[]>{
    const url =`${this.REST_API_SERVER}/role`;
    return this.httpClient.post<Role[]>(url ,payload , this.httpOptions);
  }




}