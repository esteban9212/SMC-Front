import { Injectable } from '@angular/core';
import { Program } from '../models/program';
import { ParameterSmc } from '../models/parameterSmc';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProgramsService {


	constructor(private http:Http) { 	
	}



	getPrograms():Observable<Program[]>{
		return this.http.get('http://127.0.0.1:8000/api/v1/programs').map((response:Response)=> response.json());
	}


	getSubCycleActive(program):Observable<ParameterSmc>{
		return this.http.get('http://127.0.0.1:8000/api/parameterCycle/'+program).map((response:Response)=> response.json());
	}
}


