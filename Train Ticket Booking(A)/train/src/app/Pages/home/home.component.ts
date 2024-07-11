import { Component, OnInit } from '@angular/core';
import { TrainService } from '../../service/train.service';
import { Istation } from '../../model/train';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  stationList: Istation[] = []
  formStationId: number = 0;
  toStationId: number = 0;
  dateOfTravel: string = '';

  constructor(private trainService:TrainService,private router:Router){}

  ngOnInit(): void {
    this.loadAllStation()
  }
  
  loadAllStation(){
    this.trainService.getAllStations().subscribe((res:any)=>{
      this.stationList = res.data
    })
  }

  onSearch(){
    if(this.formStationId == 0 || this.toStationId == 0 || this.dateOfTravel == ""){
      alert('select Your Journey Details')  
    }else{
      if(this.formStationId ==  this.toStationId){
        alert('select different stations')
      }else{
        this.router.navigate(['/search',this.formStationId,this.toStationId,this.dateOfTravel])
      }
    }
  }
}
