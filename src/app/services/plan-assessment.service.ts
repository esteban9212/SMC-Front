import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { PlanAssessment } from '../models/planAssessment';




@Injectable()
export class PlanAssessmentService {




	constructor(private http:Http) {
	 }



	savePlan(idUserp,idOutcomeCycleAsp):string{
		console.log("dentro service: "+idUserp);
		console.log("dentro service: "+idOutcomeCycleAsp);
		console.log('http://127.0.0.1:8000/api/savePlan/'+idUserp+'/'+idOutcomeCycleAsp);
		this.http.get('http://127.0.0.1:8000/api/savePlan/'+idUserp+'/'+idOutcomeCycleAsp).map((response:Response)=> response.json());		
	return 'http://127.0.0.1:8000/api/savePlan/'+idUserp+'/'+idOutcomeCycleAsp;
	}
}
