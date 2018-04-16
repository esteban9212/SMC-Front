export class Pi {


	ID_PI:string;
	CODE:string;
	DESCRIPTION:string;
	PLAN_ID_PLAN:string;



	constructor(ID_PI:string, CODE:string,DESCRIPTION:string,PLAN_ID_PLAN:string) {
		this.ID_PI=ID_PI;
		this.CODE=CODE;
		this.DESCRIPTION=DESCRIPTION;
		this.PLAN_ID_PLAN=PLAN_ID_PLAN;

	}

	get(){
		console.log("entro")
	}



}