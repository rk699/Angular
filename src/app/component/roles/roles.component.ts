import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule} from '@angular/common';
import { APIResponseModel } from '../../model/interface/ResponseModel';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  // firstName: string = "Purusottam Gupta";
  // angularVersion = "Version 18";
  // version: number = 10;
  // isActive: boolean = false;
  // currentData: Date = new Date();
  // inputType: string = "checkbox";
  // inputType1: string = "button";
  // selectedState: string = "";


  // //Event Binding
  // showWelcomeAlert(){
  //   alert("Welcome Angular 18 Tutorial");
  // }

  // showMessage(message: string){
  //   alert(message);
  // }

  // Dependency Injection
  roleLists: IRole[] = [];
  http = inject(HttpClient);
  // constructor(private http: HttpClient){

  // }

  isLoader: boolean = true;


  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    // as like java we have the map the result in some model for that we wwill create a model 
    this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res:APIResponseModel)=>{
        this.roleLists = res.data;
        this.isLoader = false;
    });
  }

}
