import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/clientService/client.service';
import { APIResponseModel } from '../../model/interface/ResponseModel';
import { IEmployee } from '../../model/interface/Employee';
import { Client } from '../../model/class/Client';
import { IClientProject } from '../../model/interface/clientProject';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, UpperCasePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{

  clientService = inject(ClientService)
  employeeList: IEmployee[]=[];
  clientList: Client[]=[];
  clientProjectList: IClientProject[]=[];

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("",[Validators.required,Validators.minLength(4)]), 
    startDate: new FormControl(""), 
    expectedEndDate: new FormControl(""), 
    leadByEmpId: new FormControl(""), 
    completedDate: new FormControl(""), 
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""), 
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""), 
    projectDetails: new FormControl(""), 
    contactPersonEmailId: new FormControl(""), 
    clientId: new FormControl("")
  })

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployee(); 
    this.getAllClientProjects();
}

  getAllEmployee(){
     this.clientService.getAllEmployee().subscribe((res:APIResponseModel)=>{
        this.employeeList = res.data;
    })
  }

   getAllClients(){
     this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
        this.clientList = res.data;
    })
  }
  getAllClientProjects(){
    this.clientService.getAllClentProject().subscribe((res:APIResponseModel)=>{
      this.clientProjectList = res.data;
    })
  }

  addupdateClientProject(){
    const forValue = this.projectForm.value;
    this.clientService.AddUpdateClientProject(forValue).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert(res.message);
        this.initializeForm();
      } else {
        alert('Project additon error');
      }
    })
  }
  
  initializeForm() {
    this.projectForm.reset({
      clientProjectId: 0,
      projectName: '',
      startDate: '',
      expectedEndDate: '',
      leadByEmpId: '',
      completedDate: '',
      contactPerson: '',
      contactPersonContactNo: '',
      totalEmpWorking: '',
      projectCost: '',
      projectDetails: '',
      contactPersonEmailId: '',
      clientId: ''
    });
}

  
  
}
