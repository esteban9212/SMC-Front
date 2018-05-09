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

	getPiByPlanIdPiId(idplan, idpi): Observable<any>{
		let piObservable=this.http.get('http://127.0.0.1:8000/api/getPiByPlanIdPiId/'+idplan+'/'+idpi).map((response:Response)=> response.json());
		return piObservable;
	}

	updateAS(idAsSrc,idCourse,colDate,idMethod,idProf):any{
		let obser=this.http.get('http://127.0.0.1:8000/api/updateAS/'+idAsSrc+'/'+idCourse+'/'+colDate+'/'+idMethod+'/'+idProf).map((response:Response)=> response.json());
		let retorno:any;
		obser.subscribe((data)=> {
			retorno = data;
				return retorno;
		});
	}

	updateAS1(idAsSrc,idCourse):any{
		let obser=this.http.get('http://127.0.0.1:8000/api/updateAS1/'+idAsSrc+'/'+idCourse).map((response:Response)=> response.json());
		let retorno:any;
		obser.subscribe((data)=> {
			retorno = data;
				return retorno;
		});

	}


	updateAS2(idAsSrc,colDate):any{
		let obser=this.http.get('http://127.0.0.1:8000/api/updateAS2/'+idAsSrc+'/'+colDate).map((response:Response)=> response.json());
		let retorno:any;
		obser.subscribe((data)=> {
			retorno = data;
				return retorno;
		});

	}

	updateAS3(idAsSrc,idMethod):any{
		let obser=this.http.get('http://127.0.0.1:8000/api/updateAS3/'+idAsSrc+'/'+idMethod).map((response:Response)=> response.json());
		let retorno:any;
		obser.subscribe((data)=> {
			retorno = data;
				return retorno;
		});

	}

	updateAS4(idAsSrc,idProf):any{
				let obser=this.http.get('http://127.0.0.1:8000/api/updateAS4/'+idAsSrc+'/'+idProf).map((response:Response)=> response.json());
		let retorno:any;
		obser.subscribe((data)=> {
			retorno = data;
				return retorno;
		});

	}

	createAS(idPi,idCourse,colDate,idMethod,idProf):any{
		let obser=this.http.get('http://127.0.0.1:8000/api/createAS/'+idPi+'/'+idCourse+'/'+colDate+'/'+idMethod+'/'+idProf).map((response:Response)=> response.json());
		let retorno:any;
		obser.subscribe((data)=> {
			retorno = data;
				return retorno;
		});
	}

	destroy(idAsSrc):any{
		let obser=this.http.get('http://127.0.0.1:8000/api/destroy/'+idAsSrc).map((response:Response)=> response.json());
		let retorno:any;
		obser.subscribe((data)=> {
			retorno = data;
				return retorno;
		});

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
		let curricularMappingObservable=this.http.get('http://127.0.0.1:8000/api/getCurricularMappinCDIOOutcome/'+idPi).map((response:Response)=> response.json()).do(data=>{console.log(data);});
		let curricularMapping:CoursesMapping[];
		curricularMappingObservable.subscribe((data)=> {
			curricularMapping = data;
		});

		return curricularMapping;

	}

	getMappingCourses1(idPi): Observable<CoursesMapping[]>{
		return this.http.get('http://127.0.0.1:8000/api/getCurricularMappinCDIOOutcome/'+idPi).map((response:Response)=> response.json());

	}

	getAssessmentCoursesByPi(idPi): AssessmentCourse[]{
		let AssessmentCoursesObservable= this.http.get('http://127.0.0.1:8000/api/assessmentSourceByPi/'+idPi).map((response:Response)=> response.json());
		let AssessmentCourses:AssessmentCourse[];
		AssessmentCoursesObservable.subscribe((data)=> {
			AssessmentCourses = data;
		});

		return AssessmentCourses;
	}


	getPlanById(idplan): Observable<PlanAssessment>{
		return this.http.get('http://127.0.0.1:8000/api/getPlanById/'+idplan).map((response:Response)=> response.json());

	}

	assessmentSourcesByPiId(idpi): Observable<any[]>{
		return this.http.get('http://127.0.0.1:8000/api/assessmentSourcesByPi/'+idpi).map((response:Response)=> response.json());
	}



}




