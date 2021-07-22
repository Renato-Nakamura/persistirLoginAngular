import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new UserLogin()
  
  constructor(
    private auth:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.temUser()
  }

  // temToken(){
  //   if(localStorage.getItem('user')!=''){
  //     let to = localStorage.getItem('token')?.toString()
  //     if(to!= null){
  //       let user = JSON.parse(to)
  //       environment.token = user.token
  //     }
  //   }
  // }

  entrar(){

    console.log(this.user)
    this.auth.entrar(this.user).subscribe((resp:UserLogin)=>{
      this.user= resp
      localStorage.setItem('user', JSON.stringify(this.user))
      environment.token = this.user.token
      this.router.navigate(['/show'])
    })
  }
}
