import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient
  ) { }



temToken(){
  if(localStorage.getItem('token')!=''){
    let to = localStorage.getItem('token')?.toString()
    if(to!= null){
      environment.token = to
    }
  }
}
entrar(userLogin:UserLogin):Observable<UserLogin>{
  return this.http.post<UserLogin>('https://edq-ensino.herokuapp.com/usuarios/login', userLogin)
}
}
