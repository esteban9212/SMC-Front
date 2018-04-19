import { Component, OnInit ,Input} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Pi } from '../models/pi';
import { CoursesMapping } from '../models/coursesMappping';
import { AssessmentCourse } from '../models/assessmentCourse';
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

	assessmentCoursesObservable: Observable<any[]>;
	assessmentCourses: AssessmentCourse[];

	columns: string[];


	constructor(private planAssessmentService:PlanAssessmentService) { 
		this.outcome="B";
		this.outcomeid="1";
		this.leader="Carlos Alberto Arce";
		this.description="An ability to design and conduct experiments, as well as to analyze and interpret data";
	
	}

	ngOnInit() {
	this.pisObservable = this.planAssessmentService.getPiByPlanId(1);

		this.pisObservable
		.subscribe((data)=> {
			this.pis = data;
		});
		
	}


	getCourses(idPi){

	//this.coursesObservable = this.planAssessmentService.getMappingCourses(idPi);

		//this.coursesObservable.subscribe((data)=> {
	//		this.courses = data;
	//	});


	//	return this.courses;
	}

	getAssessmentCourses(idPi){

	this.assessmentCoursesObservable = this.planAssessmentService.getAssessmentCoursesByPi(idPi);

		this.assessmentCoursesObservable.subscribe((data)=> {
			this.assessmentCourses = data;
			
		});

	
		return this.courses;
	}


}
