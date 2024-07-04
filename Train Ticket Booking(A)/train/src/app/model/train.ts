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
        this.dateOfTravel= "";
    }
}