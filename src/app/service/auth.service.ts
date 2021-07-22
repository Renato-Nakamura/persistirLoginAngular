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



  temUser(){
    if(localStorage.getItem('user')!=''){
      let to = localStorage.getItem('user')?.toString()
      if(to!= null){
        let user = JSON.parse(to)
        environment.token = user.token
        environment.foto = user.foto
      }
    }
  }
entrar(userLogin:UserLogin):Observable<UserLogin>{
  return this.http.post<UserLogin>('https://edq-ensino.herokuapp.com/usuarios/login', userLogin)
}
}
