import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../model/class/Client';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../../model/interface/ResponseModel';
import { APIConstants } from '../../Constants/APIConstants';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+ APIConstants.CLIENT_END_POINT.GET_ALL_CLIENTS)
  }
  addUpdate(obj: Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+ APIConstants.CLIENT_END_POINT.ADD_UPDATE,obj)
  }
  deleteClient(id:number):Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL+ APIConstants.CLIENT_END_POINT.DLT_BY_CLIENTID+id)
  }
  GetClientByClientId(id:number){
    return this.http.get<APIResponseModel>(environment.API_URL+ APIConstants.CLIENT_END_POINT.GET_BY_CLIENTID+id)
  }

  getAllEmployee():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+ APIConstants.EMPLOYEE.GET_ALL_EMPLOYEE)
  }

  AddUpdateClientProject(obj: Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+ APIConstants.CLIENT_PROJECT.ADD_UPDATE,obj)
  }

  getAllClentProject():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+ APIConstants.CLIENT_PROJECT.GET_ALL_CLIENT_PROJECT)
  }
 
}
