import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public informacionAuth0(token, data){
    let headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + token
    });
    return this.http.post(environment.apiEndpoint+'usuarios/auth0', data, {headers: headers})
  }

  //traemos todos los proyectos de la API
  public getProyectos(jwtToken){
    let headers = new HttpHeaders({ //BEARER LLEVA ESPACIO ANTES DE CONCATENAR EL TOKEN
      'Authorization' : 'Bearer ' + jwtToken });

      return this.http.get(environment.apiEndpoint+ 'proyectos', {headers: headers});

  }

  //Crea nuevo proyecto
  //MÉTODO QUE ENVIA PETICIÓN TIPO POST A LA API

  public createProject(jwtToken, data){
    let headers = new HttpHeaders({ //BEARER LLEVA ESPACIO ANTES DE CONCATENAR EL TOKEN
      'Authorization' : 'Bearer ' + jwtToken });

      return this.http.post(environment.apiEndpoint+ 'proyectos', data, {headers: headers});

  }


}
