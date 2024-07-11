import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainService } from '../../service/train.service';
import { Customer, Istation, ITRain, Search } from '../../model/train';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [DatePipe,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchData : Search = new Search()
  trainList: ITRain[] = []
  stationList: Istation[] = []
  selesctedTrain? : ITRain
  passenger: any = {
    "passengerName": "",
    "age": ""
  }
  passangerList:any[] =[]
  loggesUserData : Customer = new Customer()

  

  
  constructor(private activatedRoute:ActivatedRoute,private trainService:TrainService){
    const localData = localStorage.getItem('trainApp')
    if (localData !== null) {
      this.loggesUserData = JSON.parse(localData)
      
    }
    this.activatedRoute.params.subscribe((res:any)=>{
      this.searchData.formStationId = res.formStationId
      this.searchData.toStationId = res.toStationId
      this.searchData.dateOfTravel = res.dateOfTravel
      this.getSearchTrains()
    })
  }
  ngOnInit(): void {
    this.loadAllStation()
  }

  loadAllStation(){
    this.trainService.getAllStations().subscribe((res:any)=>{
      this.stationList = res.data
    })
  }

  addPassanger(){
    const strObj = JSON.stringify(this.passenger)
    const obj = JSON.parse(strObj)
    this.passangerList.push(obj);
    this.passenger = {
      "passengerName": "",
      "age": ""
    }
  }
  getSearchTrains(){
    this.trainService.getTrainsSearch(this.searchData.formStationId,this.searchData.toStationId,this.searchData.dateOfTravel).subscribe((res:any)=>{
      this.trainList = res.data
    })
  }

  openBokking(train :ITRain) {
    this.selesctedTrain = train
    const model = document.getElementById('bookModel');
    if (model != null) {
      model.style.display = 'block';
    }
  }
  closeBooking() {
    const model = document.getElementById('bookModel');
    if (model != null) {
      model.style.display = 'none';
    }
  }
  
  bookTicket(){ 
    debugger
    const bookingObj = {
      "bookingId": 0,
      "trainId":  this.selesctedTrain?.trainId,
      "passengerId": this.loggesUserData.passengerID,
      "travelDate": this.searchData.dateOfTravel,
      "bookingDate": new Date(),
      "totalSeats": 0,
      "TrainAppBookingPassengers": [] as any
    }
    bookingObj.TrainAppBookingPassengers= this.passangerList
    bookingObj.totalSeats= this.passangerList.length
    this.trainService.bookTrain(bookingObj).subscribe((res:any)=>{
      if (res.result) {
        alert('Booking Success');
        this.closeBooking();
      }
      else{
        alert(res.message)
      }
    })
  }


}
