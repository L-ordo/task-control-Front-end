import { Component, inject } from '@angular/core';
import { TasksService } from '../../../service/tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complete-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complete-tasks.component.html',
  styleUrl: './complete-tasks.component.css'
})
export default class CompleteTasksComponent {

  private tasksService = inject( TasksService );
  tasks:any = [];

  ngOnInit(){
    this.getTasks();
  }

  getTasks(){

    const userId = localStorage.getItem('userId');

    if( userId ){
        this.tasksService.getTaskComplete(Number(userId)).subscribe(
          (res)=> {
            console.log('Tareas completas Obtenidas', res);
            this.tasks = res;
          },
          
          (error)=>{
            console.log('Error al obtener tareas', error);
          }
        );
    }else{
      console.log('No se encontro ID del usuario');
    }
  }

}
