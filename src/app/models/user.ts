export class User {


	ID_USER:string;
	NAME_USER:string;
	LAST_NAME:string;
	EMAIL:string;
	IDENTIFICATION:string;
	LOGIN:string;
	PASSWORD_USER:string;
	STATE_ID_STATE:string;


	constructor(ID_USER:string, NAME_USER:string,LAST_NAME:string,EMAIL:string,IDENTIFICATION:string,LOGIN:string,
		PASSWORD_USER:string,STATE_ID_STATE:string) {
		this.ID_USER=ID_USER;
		this.NAME_USER=NAME_USER;
		this.LAST_NAME=LAST_NAME;
		this.EMAIL=EMAIL;
		this.IDENTIFICATION=IDENTIFICATION;
		this.LOGIN=LOGIN;
		this.PASSWORD_USER=PASSWORD_USER;
		this.STATE_ID_STATE=STATE_ID_STATE;
	}
}