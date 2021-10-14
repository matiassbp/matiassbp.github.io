import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private servicio: UsuarioService) {

  }


  login() {
    //const usuarioSeleccionado = this.usuarios.find(x => x.username === this.username);
    console.log("comenzando login()");
    this.servicio.login(this.username, this.password).subscribe(response => {
      let tokenJWT = response["token"]
      localStorage.setItem("token", tokenJWT);


      if (response.length != 0) {

        localStorage.setItem("token", response["token"]);
        console.log(response);
        const helper = new JwtHelperService();
        if (helper.decodeToken(tokenJWT).admin) {
          alert("admin");
          this.router.navigateByUrl("/admin");
        }
        else {
          alert("vendedor");
          this.router.navigate(['/vendedor/' + helper.decodeToken(tokenJWT).id]);
        }

      }
      else {
        alert("datos erroneos");
      }
    })

  }


  ngOnInit(): void {
    
  }

}
