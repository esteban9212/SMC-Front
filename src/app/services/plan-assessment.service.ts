	import { Injectable } from '@angular/core';
	import { Http,Response } from '@angular/http';
	import 'rxjs/Rx';
	import { Observable } from 'rxjs/Rx';
	import { PlanAssessment } from '../models/planAssessment';
	import { catchError, map, tap } from 'rxjs/operators';
	import { of } from 'rxjs/observable/of';
	import { ProgramsService } from '../services/programs.service';
	import { OutcomeService } from '../services/outcome.service';
	import { Program } from '../models/program';
	import { Outcome } from '../models/outcome';
	import { OutcomeCycleAs } from '../models/outcomeCycleAs';
	import { Pi } from '../models/pi';
	import { CDIOyPI } from '../models/cdiobypi';
	import { CoursesMapping } from '../models/coursesMappping';
	import { AssessmentCourse } from '../models/assessmentCourse';

	@Injectable()
	export class PlanAssessmentService {

		savePlan(idUserp,idOutcomeCycleAsp):Observable<any>{	
			console.log("dentro service: "+idUserp);
			console.log("dentro service: "+idOutcomeCycleAsp);
			console.log('http://127.0.0.1:8000/api/savePlan/'+idUserp+'/'+idOutcomeCycleAsp);
			return this.http.get('http://127.0.0.1:8000/api/savePlan/'+idUserp+'/'+idOutcomeCycleAsp).map((response:Response)=> response.json());
			//return 'http://127.0.0.1:8000/api/savePlan/'+idUserp+'/'+idOutcomeCycleAsp;
		} 

	constructor(private http:Http) {
	}


	getPlans(): Observable<any[]>{
		return this.http.get('http://127.0.0.1:8000/api/getPlansList').map((response:Response)=> response.json());

	}

	getColumns(): string[]{
		return ["Idplan","Name", "Leader", "Program", "State","DateCreation", "Author"];
	}

	getPiByPlanId(idplan): Observable<any[]>{
		let piObservable=this.http.get('http://127.0.0.1:8000/api/getPisByPlanId/'+idplan).map((response:Response)=> response.json());


		


     return piObservable;
	}

	getCdioByPiId(idPi): CDIOyPI[]{
		let cdioObservable=this.http.get('http://127.0.0.1:8000/api/getCdioByPiId/'+idPi).map((response:Response)=> response.json());
		let cdios:CDIOyPI[];
		cdioObservable.subscribe((data)=> {
			cdios = data;
		});

		return cdios;

	}
	getMappingCourses(idPi): CoursesMapping[]{
		let curricularMappingObservable=this.http.get('http://127.0.0.1:8000/api/getCurricularMappinCDIOOutcome/'+idPi).map((response:Response)=> response.json());
		let curricularMapping:CoursesMapping[];
		curricularMappingObservable.subscribe((data)=> {
			curricularMapping = data;
		});

		return curricularMapping;

	}

	getAssessmentCoursesByPi(idPi): AssessmentCourse[]{
		let AssessmentCoursesObservable= this.http.get('http://127.0.0.1:8000/api/assessmentSourceByPi/'+idPi).map((response:Response)=> response.json());
		let AssessmentCourses:AssessmentCourse[];
		AssessmentCoursesObservable.subscribe((data)=> {
			AssessmentCourses = data;
		});

		return AssessmentCourses;
	}


}




