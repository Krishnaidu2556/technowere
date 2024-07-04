import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Search } from '../../model/train';
import { TrainService } from '../../service/train.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchData : Search = new Search();

  constructor(private activatedRoutes:ActivatedRoute,private trainService:TrainService){
    this.activatedRoutes.params.subscribe((res:any)=>{
      this.searchData = res
      this.getSearchTrains()
    })
  }

  getSearchTrains(){
    this.trainService.getTrainsSearch(this.searchData.formStationId,this.searchData.toStationId,this.searchData.dateOfTravel).subscribe((res:any)=>{
      console.log(res);
      

    })
  }

}
