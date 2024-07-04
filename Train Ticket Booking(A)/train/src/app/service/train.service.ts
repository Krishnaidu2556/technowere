import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/TrainApp'
  constructor( private http:HttpClient) { }

  getAllStations(){
    return this.http.get(`${this.apiUrl}/GetAllStations`)
  }

  getTrainsSearch(form: number, to :number,date:string){
    return this.http.get(`${this.apiUrl}/GetTrainsBetweenStations?departureStationId=${form}&arrivalStationId=${to}&departureDate=${date}
`)
  }

}
