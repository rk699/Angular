import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../model/class/Client';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../../model/interface/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+'GetAllClients')
  }
  addUpdate(obj: Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+'AddUpdateClient',obj)
  }
  deleteClient(id:number):Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL+'DeleteClientByClientId?clientId='+id)
  }
  GetClientByClientId(id:number){
    return this.http.get<APIResponseModel>(environment.API_URL+'GetClientByClientId?clientId='+id)
  }
 
}
