export class UserLogin {


	id:string;
	name:string;
	last_name:string;
	username:string;
	email:string;
	identification:string;
	created_at:string;
	updated_at:string;


	constructor(id:string, name:string, last_name:string, username:string, email:string, identification:string, 
		created_at:string, updated_at:string) {
		this.id=id;
		this.name=name;
		this.last_name=last_name;
		this.email=email;
		this.identification=identification;
		this.username=username;
		this.updated_at=updated_at;
		this.created_at=created_at;
	}


}