import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../modelo/usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }
  
  public isAuthenticated(): boolean{
    console.log("is authenticated");
    const token = localStorage.getItem('token');
    console.log(token)
    console.log(token?true:false)
    return token?true:false;
  }

  

}
