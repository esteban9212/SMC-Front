import { Component, OnInit ,Input} from '@angular/core';
import { Pi } from '../models/pi';
import { CoursesMapping } from '../models/coursesMappping';
import { AssessmentCourse } from '../models/assessmentCourse';
import { CDIOyPI } from '../models/cdiobypi';
import { PlanAssessmentService } from '../services/plan-assessment.service';
import { Observable } from 'rxjs/Rx';
import { PlanAssessment } from '../models/planAssessment';


@Component({
	selector: 'app-plan-info',
	templateUrl: './plan-info.component.html',
	styleUrls: ['./plan-info.component.css']
})
export class PlanInfoComponent implements OnInit {
	@Input() idPlan: number;
	outcome:string;
	outcomeid:string;
	leader:string;
	description:string;
	evaluation:string;

	planObservable:Observable<PlanAssessment>;
	plan:PlanAssessment;


	pis: Pi[];

	columns: string[];


	constructor(private planAssessmentService:PlanAssessmentService) { 


	}

	ngOnInit() {

		let piObservable = this.planAssessmentService.getPiByPlanId(this.idPlan);

		piObservable.subscribe((data)=> {
			this.pis = data;

	
		console.log(this.pis );
		});


		this.planObservable= this.planAssessmentService.getPlanById(this.idPlan);

		this.planObservable.subscribe((data)=> {
			this.plan = data;

	
	console.log(this.plan);
		this.outcome=this.plan.Criterion;
		this.outcomeid=this.plan.Idplan;
		this.leader=this.plan.Leader;
		this.description=this.plan.Description;
		this.evaluation=this.plan.DateEvaluation;
		});
	

		}


		editRow(pi:Pi){

    			window.open('/edit/'+this.idPlan+'/'+pi.Idpi); 

		}

		
	}






