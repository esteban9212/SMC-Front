import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
	constructor(private http: Http) {

	}

	signin(username:string, password:string) {
		return this.http.post('http://127.0.0.1:8000/api/auth/login',
			{username: username, password: password},
			{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
			.map(
				(response: Response)=>{
					const token = response.json().token;
					const base64Url = token.split('.')[1];
					const base64 = base64Url.replace('-','+').replace('_','/');
					return {token:token, decoded: JSON.parse(window.atob(base64))};
				}
			)
			.do(
				tokenData => {
					localStorage.setItem('token', tokenData.token);
				});
	}


}