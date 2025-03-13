import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-homeworks',
  standalone: true,
  imports: [ RouterModule, NavbarComponent],
  templateUrl: './homeworks.component.html',
  styleUrl: './homeworks.component.css'
})
export default class HomeworksComponent {

}
