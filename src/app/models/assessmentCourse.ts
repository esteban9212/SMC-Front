export class AssessmentCourse {


	ID_COURSE:string;
	NAME_COURSE:string;
	CREDITS:string;
	PROGRAM_ID_PROGRAM:string;
	CODE:string;


	constructor(ID_COURSE:string, NAME_COURSE:string,CREDITS:string,CODE:string,PROGRAM_ID_PROGRAM:string) {
		this.ID_COURSE=ID_COURSE;
		this.NAME_COURSE=NAME_COURSE;
		this.CREDITS=CREDITS;
		this.CODE=CODE;
		this.PROGRAM_ID_PROGRAM=PROGRAM_ID_PROGRAM;

	}

}

