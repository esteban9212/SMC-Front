import { Injectable } from '@angular/core';
import { Program } from '../models/program';
import { ParameterSmc } from '../models/parameterSmc';
import { User } from '../models/user';
import { Rol } from '../models/rol';
import { RolCip } from '../models/rolCip';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

 constructor(private http:Http) { 	
	}



	getUser(idUser):Observable<User>{
		return this.http.get('http://127.0.0.1:8000/api/userById/'+idUser).map((response:Response)=> response.json());
	}

	getRolsByUser(idUser):Observable<Rol[]>{
		return this.http.get('http://127.0.0.1:8000/api/rolsByUserId/'+idUser).map((response:Response)=> response.json());
	}

	getRol(idRol):Observable<RolCip>{
		return this.http.get('http://127.0.0.1:8000/api/getRol/'+idRol).map((response:Response)=> response.json());
	}
}
