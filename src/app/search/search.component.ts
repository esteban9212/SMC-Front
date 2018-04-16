import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { OutcomeService } from '../services/outcome.service';
import { PlanAssessmentService } from '../services/plan-assessment.service';
import { Program } from '../models/program';
import { Outcome } from '../models/outcome';
import { OutcomeCycleAs } from '../models/outcomeCycleAs';
import { ParameterSmc } from '../models/parameterSmc';
import { PlanAssessment } from '../models/planAssessment';
import { Router } from "@angular/router";

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


plans: Observable<any[]>;

columns: string[];


  constructor(private planAssessmentService:PlanAssessmentService, private router: Router) { }

  ngOnInit() {
  			  var tokenData = localStorage.getItem('token');

  			if (tokenData == null){
  				this.router.navigate(['/signin']);
			}

  this.columns = this.planAssessmentService.getColumns(); 
  //["name", "age", "species", "occupation"]
  this.plans = this.planAssessmentService.getPlans();


  }

}
