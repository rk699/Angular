import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel } from '../../model/interface/ResponseModel';
import { IDesignation } from '../../model/interface/designation';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationLists: IDesignation[]=[];
  masterService = inject(MasterService);
  isLoader: boolean = true;

  ngOnInit(): void {
    this.masterService.getDesignation().subscribe((result:APIResponseModel)=>{
      this.designationLists = result.data ;
      this.isLoader = false;
    },error=>{
      alert('API Error')
      this.isLoader = false;
    })
  }
}
