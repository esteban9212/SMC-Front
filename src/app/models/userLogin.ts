export class UserLogin {


	id:string;
	name:string;
	last_name:string;
	username:string;
	email:string;
	password:string;
	identification:string;


	constructor(ID_USER:string, NAME_USER:string,LAST_NAME:string,EMAIL:string,IDENTIFICATION:string,LOGIN:string,
		PASSWORD_USER:string) {
		this.id=ID_USER;
		this.name=NAME_USER;
		this.last_name=LAST_NAME;
		this.email=EMAIL;
		this.identification=IDENTIFICATION;
		this.username=LOGIN;
		this.password=PASSWORD_USER;
	}


}