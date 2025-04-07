import { Component, inject } from '@angular/core';
import { TasksService } from '../../../service/tasks.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css'
})

export default class AllTasksComponent   {

   private tasksService = inject( TasksService );

   editandoTarea: any = null;
   tituloEditado: string = '';
   descripcionEditada: string = '';


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


   activarFormularioEdicion(task: any) {
    this.editandoTarea = task;
    this.tituloEditado = task.titulo;
    this.descripcionEditada = task.descripcion;
  }
  
  cancelarEdicion() {
    this.editandoTarea = null;
  }
  
  guardarEdicion() {
    if (this.editandoTarea) {
      const tareaActualizada = {
        ...this.editandoTarea,
        titulo: this.tituloEditado,
        descripcion: this.descripcionEditada,
      };
  
      this.tasksService.updateTask(
        tareaActualizada.id,
        tareaActualizada.titulo,
        tareaActualizada.descripcion,
        tareaActualizada.completada
      ).subscribe({
        next: () => {
          this.editandoTarea.titulo = this.tituloEditado;
          this.editandoTarea.descripcion = this.descripcionEditada;
          this.cancelarEdicion();
        },
        error: (err) => {
          console.error('Error al actualizar tarea:', err);
        }
      });
    }
  }
  



}
