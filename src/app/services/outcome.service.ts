import { Injectable } from '@angular/core';
import { Outcome } from '../models/outcome';
import { OutcomeCycleAs } from '../models/outcomeCycleAs';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class OutcomeService {

  constructor(private http:Http) { 	
	}

	outcomesByUserAndProgram(user,program):Observable<Outcome[]>{
		return this.http.get('http://127.0.0.1:8000/api/outcomesByUserAndProgram/'+user+'/'+program).map((response:Response)=> response.json());
	}

	outcomeCycleAsByOutcomeCycle(idOutcome,idCycle):Observable<OutcomeCycleAs>{
		return this.http.get('http://127.0.0.1:8000/api/outcomeCycleAsByOutcomeCycle/'+idOutcome+'/'+idCycle).map((response:Response)=> response.json());
	}

}
