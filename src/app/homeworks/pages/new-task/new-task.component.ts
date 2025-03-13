import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { TasksService } from '../../../service/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export default class NewTaskComponent {

  private authService = inject( AuthService );
  private router = inject( Router );
  private tasksService = inject( TasksService );

  titulo: string = '';
  descripcion: string = '';


  createTask():void{

    //Obtenemos el id del usuario
    const userId = Number(localStorage.getItem('userId'));

    //Verificamos si el Id del usuario existe
    if( userId ){

      this.tasksService.createTasksById( userId, this.titulo, this.descripcion ).subscribe(
        ( res ) => {
          console.log('Tarea Creada ', res );
          this.router.navigate(['task/resumen']);
        },
        ( error ) => {
            console.error('Error al crear tarea', error );
        }
      );
    }else{
      console.log('No se encontro el id del usuario');
    }

  }


}
