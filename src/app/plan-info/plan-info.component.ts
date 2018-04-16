import { Component, OnInit ,Input} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Pi } from '../models/pi';
import { CoursesMapping } from '../models/coursesMappping';
import { PlanAssessmentService } from '../services/plan-assessment.service';


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

	pisObservable: Observable<any[]>;
	pis: Pi[];

	coursesObservable: Observable<any[]>;
	courses: CoursesMapping[];

	columns: string[];


	constructor(private planAssessmentService:PlanAssessmentService) { 

	}

	ngOnInit() {

		this.outcome="B";
		this.outcomeid="1";
		this.leader="Carlos Alberto Arce";
		this.description="An ability to design and conduct experiments, as well as to analyze and interpret data";
		this.pisObservable = this.planAssessmentService.getPiByPlanId(1);

		this.pisObservable
		.subscribe((data)=> {
			this.pis = data;
		});
	}


	getCourses(idPi){

	this.coursesObservable = this.planAssessmentService.getMappingCourses(idPi);

		this.coursesObservable
		.subscribe((data)=> {
			this.courses = data;
		});


		return this.courses;
	}


}
