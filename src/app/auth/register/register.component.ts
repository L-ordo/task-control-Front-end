import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent {


    private authService = inject( AuthService );
    private router = inject(Router);

    nombre: string ='';
    correo: string = '';
    password: string = '';


    register():void{
      this.authService.register( this.nombre, this.correo, this.password ).subscribe(
        (res) =>{
          console.log('Usuario registrado', res);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error al registrar al usuario', error);
        }
      );
    }

}
