import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { Program } from '../models/program';
import { Outcome } from '../models/outcome';


import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {


  programs:Observable<Program[]>;


  constructor(private programsService:ProgramsService) {

  }


  ngOnInit(): void {
    this.programs= this.programsService.getPrograms();

  }

}


