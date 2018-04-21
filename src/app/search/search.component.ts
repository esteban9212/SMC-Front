import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { OutcomeService } from '../services/outcome.service';
import { PlanAssessmentService } from '../services/plan-assessment.service';
import { Program } from '../models/program';
import { Outcome } from '../models/outcome';
import { OutcomeCycleAs } from '../models/outcomeCycleAs';
import { ParameterSmc } from '../models/parameterSmc';
import { Router,ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Rx';
import { PlanAssessment } from '../models/planAssessment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  plans: Observable<any[]>;

  columns: string[];
  idplan:number;

    planObservable:Observable<PlanAssessment>;
  plan:PlanAssessment;

  constructor(private planAssessmentService:PlanAssessmentService, private router: Router,private route: ActivatedRoute) {

  }

  ngOnInit() {

this.route.params
      .subscribe(params => {
        const _id = params['idPlan'].toString();
        this.idplan = _id;
      });


  this.columns = this.planAssessmentService.getColumns(); 
  //["name", "age", "species", "occupation"]
  this.plans = this.planAssessmentService.getPlans();


  this.planObservable= this.planAssessmentService.getPlanById(this.idplan);

    this.planObservable.subscribe((data)=> {
      this.plan = data;

  

    });

			}


  }


