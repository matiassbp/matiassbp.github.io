import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user:Usuario;

  constructor(private router: Router) {
    this.user = {id: 0, nombre: "", username: "", email: "", password:"", admin:false};
   }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }

}
