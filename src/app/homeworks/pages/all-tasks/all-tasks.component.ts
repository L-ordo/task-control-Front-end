import { Component, inject } from '@angular/core';
import { TasksService } from '../../../service/tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css'
})

export default class AllTasksComponent   {

   private tasksService = inject( TasksService );

   tasks:any = [];

   ngOnInit() {
    this.getTasks();
}

   getTasks(){

    //Obtenemos el id del localStorage
    const userId = localStorage.getItem('userId');

    //Si el id existe
    if (userId){
      this.tasksService.getTasksById(Number(userId)).subscribe(
        (res)=>{
          console.log('Tareas Obtenidas', res);
          this.tasks = res;
        },
        (error) =>{
          console.log('Error al obtner las tareas',error);
        }
      );
    }else{
      console.log('No se encontro el ID en el localStorage')
    }
   }

}
