import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { PlanAssessmentService } from '../services/plan-assessment.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-pruebatabla',
  templateUrl: './pruebatabla.component.html',
  styleUrls: ['./pruebatabla.component.css']
})
export class PruebatablaComponent implements OnInit {

  public dataObservable:  Observable<any[]>;
  public data:  any[];

  public filterQuery = "";
  public rowsOnPage = 6;
  public sortBy = "Ciclo";
  public sortOrder = "desc";



  constructor(private _http: Http,private planAssessmentService:PlanAssessmentService) { }

  ngOnInit() {


 this.dataObservable = this.planAssessmentService.getPlans();
  	this.dataObservable
      .subscribe((data)=> {
          this.data = data;
      });
  }

}
