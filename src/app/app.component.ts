import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MasterComponent } from './component/master/master.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rolesAndDesignation';
}
