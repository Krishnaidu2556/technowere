import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/TrainApp/'
  constructor( private http:HttpClient) { }

  getAllStations(){
    return this.http.get(`${this.apiUrl}GetAllStations`)
  }

  getTrainsSearch(form: number, to: number, date: string): Observable<any> {
    return this.http.get(`${this.apiUrl}GetTrainsBetweenStations?departureStationId=${form}&arrivalStationId=${to}&departureDate=${date}`);
  }
  createNewCustomer(obj: Customer){
    return this.http.post(`${this.apiUrl}AddUpdatePassengers`, obj)
  }


  onLogin(obj: any): Observable<any> {
    return this.http.post(`${this.apiUrl}Login`, obj)
  }

  bookTrain(obj: any): Observable<any> {
    return this.http.post(`${this.apiUrl}BookTrain`, obj)
  }
}
