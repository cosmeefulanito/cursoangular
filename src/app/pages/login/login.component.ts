import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as auth0 from 'auth0-js';
import { StorageService } from '../../services/storage/storage.service';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public webAuth = new auth0.WebAuth({
    clientID: environment.auth0.clientID,
    domain: environment.auth0.domain,
    responseType: environment.auth0.responseType,
    audience: environment.auth0.audience,
    redirectUri: environment.returnUrl,
    scope: environment.auth0.scope
  });

  constructor(
    private storage: StorageService, 
    private Api: ApiService,
    private router: Router
    ) { 
    this.webAuth.parseHash((err, authResult: any) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        let datos = {
          auth0_user_id: authResult.idTokenPayload.sub
        };
        
        this.Api.informacionAuth0(authResult.idToken,datos).subscribe((resultado: any) => {
          const name = resultado.data.user_metadata.name;
          const lastname = resultado.data.user_metadata.lastname;
          console.log(resultado);
          this.storage.saveUser(
            authResult.idToken, 
            name,
            lastname,
            authResult.idTokenPayload.picture, 
            authResult.idTokenPayload.sub,
            authResult.idTokenPayload.email
          )});
          this.router.navigateByUrl('/dashboard');
      } else if (err) {
       
      }
    });
  }

  ngOnInit() {
  }

  public login(): void {
    this.webAuth.authorize();
  }



}
