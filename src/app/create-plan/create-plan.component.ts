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
	selector: 'app-create-plan',
	templateUrl: './create-plan.component.html',
	styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {


	programs:Observable<Program[]>;
	outcomes:Observable<Outcome[]>;


	subCycle:Observable<ParameterSmc>
	subCycle2:ParameterSmc;

	OutcomeCycleAs:Observable<OutcomeCycleAs>
	OutcomeCycleAs2:OutcomeCycleAs;

	plans:Observable<PlanAssessment[]>;
	programSelected:any;
	outcomeSelected:any;
	user:string;
	mensaje:string

	constructor(private programsService:ProgramsService,private outcomeService:OutcomeService,private planAssessmentService:PlanAssessmentService) {
		
	}

	ngOnInit(): void {
		this.programs= this.programsService.getPrograms();
	}

	onChangeProgram(newValue) {
		this.programSelected = newValue;
		this.subCycle =this.programsService.getSubCycleActive(newValue);
		this.user='2813';

		this.outcomes= this.outcomeService.outcomesByUserAndProgram(this.user,newValue);
		
		this.subCycle.subscribe(cycle=>{
			this.subCycle2=cycle;

		});

	}


	onChangeOutcome(newValue) {
		
		console.log(this.outcomeSelected);
		this.outcomeSelected = newValue; 

		this.OutcomeCycleAs=this.outcomeService.outcomeCycleAsByOutcomeCycle(this.outcomeSelected,this.subCycle2.TEXT_VALUE);
		this.OutcomeCycleAs.subscribe(outcyas=>{
			this.OutcomeCycleAs2=outcyas;
			console.log(this.OutcomeCycleAs2.ID_OUTCO_CYCLE+"algo");

		});

	

	}



	crearPlan(){
	console.log("subcycle dentro : "+ this.subCycle2.TEXT_VALUE);
		console.log("outcome1 : " + this.outcomeSelected);
		console.log("outcomeCycleAs : " + this.OutcomeCycleAs2.ID_OUTCO_CYCLE);



		console.log("fecha : " + "fecha");
		console.log("usuario : " + this.user);
		console.log("perido : " + "algo");
		console.log("estado : " + "draft");
		console.log("outcome cycle : " + "buscar id");

		
		this.mensaje='Plan de assessment creado para verificar acceda a : '+this.planAssessmentService.savePlan(this.user,this.OutcomeCycleAs2.ID_OUTCO_CYCLE);
	}



}


