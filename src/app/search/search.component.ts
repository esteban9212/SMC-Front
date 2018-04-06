import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { OutcomeService } from '../services/outcome.service';
import { PlanAssessmentService } from '../services/plan-assessment.service';
import { Program } from '../models/program';
import { Outcome } from '../models/outcome';
import { OutcomeCycleAs } from '../models/outcomeCycleAs';
import { ParameterSmc } from '../models/parameterSmc';
import { PlanAssessment } from '../models/planAssessment';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


characters: Observable<any[]>;
columns: string[];


  constructor(private planAssessmentService:PlanAssessmentService) { }

  ngOnInit() {

  this.columns = this.planAssessmentService.getColumns(); 
  //["name", "age", "species", "occupation"]
  this.characters = this.planAssessmentService.getCharacters();
  //all data in mock-data.ts

  }

}
