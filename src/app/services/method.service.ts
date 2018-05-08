import { Injectable } from '@angular/core';
import { Method } from '../models/method';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MethodService {

  constructor(private http:Http) { 	
	}

	allMethods():Observable<Method[]>{
		return this.http.get('http://127.0.0.1:8000/api/allMethods').map((response:Response)=> response.json());
	}

}