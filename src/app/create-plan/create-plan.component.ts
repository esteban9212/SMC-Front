import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { OutcomeService } from '../services/outcome.service';
import { UserService } from '../services/user.service';
import { PlanAssessmentService } from '../services/plan-assessment.service';
import { Program } from '../models/program';
import { Outcome } from '../models/outcome';
import { OutcomeCycleAs } from '../models/outcomeCycleAs';
import { ParameterSmc } from '../models/parameterSmc';
import { PlanAssessment } from '../models/planAssessment';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user';
//Simport {Popup} from 'ng2-opd-popup';

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
	user1:Observable<User>
	user:User;
	mensaje:string

	plan:Observable<any>; 
	plan2:any;

	outcomecambiado:Observable<Outcome>;
	outcomecambiado2:any;

	constructor(private userService:UserService,private programsService:ProgramsService,
		private outcomeService:OutcomeService,private planAssessmentService:PlanAssessmentService) {
		
	}

	ngOnInit(): void {
		this.programs= this.programsService.getPrograms();
		this.user1=this.userService.getUser('2813');

		this.user1.subscribe(us=>{
			this.user=us;
		});
	}

	onChangeProgram(newValue) {
		this.programSelected = newValue;
		this.subCycle =this.programsService.getSubCycleActive(newValue);
		

		console.log(this.user);
		this.outcomes= this.outcomeService.outcomesByUserAndProgram(this.user.ID_USER,newValue);
		
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

		
		this.plan = this.planAssessmentService.savePlan(this.user.ID_USER,this.OutcomeCycleAs2.ID_OUTCO_CYCLE);
		this.plan.subscribe(prueba=>{
			this.plan2 = prueba;
		});

		this.outcomecambiado=this.outcomeService.changeStateOutcomeToCreated(this.outcomeSelected);
		this.outcomecambiado.subscribe(prueba=>{
			this.outcomecambiado2 = prueba;
		});


//		this.popup.show();
	}



}


