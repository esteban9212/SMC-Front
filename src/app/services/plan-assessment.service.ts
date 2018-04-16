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




@Injectable()
export class PlanAssessmentService {





	savePlan(idUserp,idOutcomeCycleAsp):Observable<any>{	
		console.log("dentro service: "+idUserp);
		console.log("dentro service: "+idOutcomeCycleAsp);
		console.log('http://127.0.0.1:8000/api/savePlan/'+idUserp+'/'+idOutcomeCycleAsp);
		return this.http.get('http://127.0.0.1:8000/api/savePlan/'+idUserp+'/'+idOutcomeCycleAsp).map((response:Response)=> response.json());
		//return 'http://127.0.0.1:8000/api/savePlan/'+idUserp+'/'+idOutcomeCycleAsp;
	} 

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
 private handleError<T> (operation = 'operation', result?: T) {
 	return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
};
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
	return this.http.get('http://127.0.0.1:8000/api/getPisByPlanId/'+idplan).map((response:Response)=> response.json());

}



getCdioByPiId(idPi): Observable<any[]>{
	return this.http.get('http://127.0.0.1:8000/api/getCdioByPiId/'+idPi).map((response:Response)=> response.json());

}
getMappingCourses(idPi): Observable<any[]>{
	return this.http.get('http://127.0.0.1:8000/api/getCurricularMappinCDIOOutcome/'+idPi).map((response:Response)=> response.json());

}


}




