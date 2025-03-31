import { Component, inject } from '@angular/core';
import { TasksService } from '../../../service/tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pending-tasks',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './pending-tasks.component.html',
  styleUrl: './pending-tasks.component.css'
})
export default class PendingTasksComponent {

   private tasksService = inject( TasksService );
   tasks: any =[];
   pendingTasks: any[] = [];

   ngOnInit() {
    this.getPending();
}
  
  getPending(){

    //obtenemos el id del localstorage
    const userId = localStorage.getItem('userId');

    if(userId){
      this.tasksService.getTaskPending(Number(userId)).subscribe(
        (res)=> {
          console.log('Tareas Pendientes obtenidas', res);
          this.tasks = res;
        },
        (error) =>{
          console.log('Error al obtener tareas', error);
        }
      );
    }else{
      console.log('No se encontro id del usario');
    }

}


  completeTask( taskId: number ){
    this.tasksService.markCompleteTask(taskId).subscribe(
      (res)=>{
        console.log('Tarea Completada', res);
        this.pendingTasks = this.pendingTasks.filter( task => task.id !== taskId );
      },
      ( err )=>{
        console.error('Error al completar tarea', err );
      }
    );
  }

}
