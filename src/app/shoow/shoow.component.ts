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

  constructor(
    private router:Router,
    private auth:AuthService
  ) { }

  ngOnInit() {
    this.auth.temToken()
    console.log(environment.token)
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
  }

  sair(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
