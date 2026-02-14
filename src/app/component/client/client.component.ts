import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { ClientService } from '../../services/clientService/client.service';
import { APIResponseModel } from '../../model/interface/ResponseModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadAllclient();
  }

  
  loadAllclient(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    })
  }

  onSaveClient(){
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("Client Created success");
        this.loadAllclient();
        this.clientObj = new Client();
      } else {
        alert(res.message)
      }
    })
  }

  onDelete(id:number){
    this.clientService.deleteClient(id).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("Client Deleted");
        this.loadAllclient();
        this.clientObj = new Client();
      } else {
        alert(res.message)
      }
    })
  }

  onView(id:number){
    this.clientService.GetClientByClientId(id).subscribe((res:APIResponseModel)=>{
      if(res.result){
        this.clientObj = res.data;
      } else {
        alert(res.message)
      }
    })
  }

  onClear(){
    this.clientObj = new Client();
  }

}
