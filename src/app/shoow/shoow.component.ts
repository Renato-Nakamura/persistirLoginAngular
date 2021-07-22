import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-shoow',
  templateUrl: './shoow.component.html',
  styleUrls: ['./shoow.component.css']
})
export class ShoowComponent implements OnInit {
  img:string
  constructor(
    private router:Router,
    private auth:AuthService
  ) { }

  ngOnInit() {
    this.auth.temUser()
    console.log(environment.token)
    console.log(environment.foto)
    this.img= environment.foto
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
  }

  sair(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
