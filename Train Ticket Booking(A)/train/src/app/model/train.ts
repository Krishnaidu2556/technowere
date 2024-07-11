export interface Istation{
    stationID:number,
    stationName:string,
    stationCode:string
}
export class Search{
    formStationId:number;
    toStationId:number;
    dateOfTravel:string

    constructor(){
        this.formStationId= 0;
        this.toStationId = 0;
        this.dateOfTravel='';
    }
}


export interface ITRain {
    trainId: number
    trainNo: number
    trainName: string
    departureStationName: string
    arrivalStationName: string
    arrivalTime: string
    departureTime: string
    totalSeats: number
    departureDate: string
    bookedSeats: number
  }
  

  export class Customer {
    passengerID: number
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string

    constructor(){
        this.firstName='';
        this.lastName='';
        this.email='';
        this.phone='';
        this.password='';
        this.passengerID= 0;
    }
}
  