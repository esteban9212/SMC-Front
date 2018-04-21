import { Component, OnInit ,Input} from '@angular/core';
import { Pi } from '../models/pi';
import { CoursesMapping } from '../models/coursesMappping';
import { AssessmentCourse } from '../models/assessmentCourse';
import { CDIOyPI } from '../models/cdiobypi';
import { PlanAssessmentService } from '../services/plan-assessment.service';
	import { Observable } from 'rxjs/Rx';


@Component({
	selector: 'app-plan-info',
	templateUrl: './plan-info.component.html',
	styleUrls: ['./plan-info.component.css']
})
export class PlanInfoComponent implements OnInit {

	outcome:string;
	outcomeid:string;
	leader:string;
	description:string;
	idPlan:number;

	pis: Pi[];

	columns: string[];


	constructor(private planAssessmentService:PlanAssessmentService) { 
		this.outcome="B";
		this.outcomeid="1";
		this.leader="Carlos Alberto Arce";
		this.description="An ability to design and conduct experiments, as well as to analyze and interpret data";

	}

	ngOnInit() {
		this.idPlan=2;
		let piObservable = this.planAssessmentService.getPiByPlanId(this.idPlan);

		piObservable.subscribe((data)=> {
			this.pis = data;

	
		console.log(this.pis );
		});


		}

		
	}






