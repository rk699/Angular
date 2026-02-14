import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from '../roles/roles.component';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [DesignationComponent, RolesComponent, NgClass,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentComponent: String="";

  changeTab(param: string){
    this.currentComponent = param;
  }
}
