import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseUrl = 'http://127.0.0.1:8000/api/tasks';

    private http = inject( HttpClient );
    private router = inject( Router );

  constructor() { }

  getTasksById( usuario_id: number ){
    return this.http.get(`${this.baseUrl}/user/${usuario_id}`);
  }

  createTasksById(usuario_id: number, titulo: string, descripcion:string){
      return this.http.post(`${this.baseUrl}`, { usuario_id, titulo, descripcion });

  }

}
