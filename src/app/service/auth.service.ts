import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://127.0.0.1:8000/api';

  private http = inject( HttpClient );
  private router = inject( Router );

  constructor() { }

  //Metodo para loguearse

  login( correo: string, password: string ){
      console.log('Servicio desde el login');
      // const url = `${ this.baseUrl}/login`

      return this.http.post<any>(`${ this.baseUrl}/login`, { correo, password });
  }




  //Metodo para registrar un usuario
  register( nombre:string ,correo: string, password: string  ){
    console.log('Servicio desde el registro');
    return this.http.post(`${ this.baseUrl}/users`, { nombre ,correo, password });

  }

}
