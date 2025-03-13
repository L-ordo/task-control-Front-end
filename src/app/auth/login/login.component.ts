import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  private authService = inject( AuthService );
  private router = inject(Router);

    correo: string = '';
    password: string = '';



    login(): void {
      console.log('Intentando ingresar con estos datos', this.correo, this.password);
      this.authService.login(this.correo, this.password).subscribe(
        (res) => {
          console.log('Respuesta completa del login:', res);

          if (res?.user?.id) {
            // Guardamos el ID del usuario en localStorage
            localStorage.setItem('userId', res.user.id.toString());
            console.log('ID del usuario guardado en localStorage:', res.user.id);
            this.router.navigate(['task/resumen']);
          } else {
            console.log('La respuesta no contiene la propiedad "user".', res);
          }
        },
        (error) => {
          console.log('Error al hacer login', error);
        }
      );
    }


}
