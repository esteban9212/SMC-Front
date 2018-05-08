export class AssessmentCourse {


	ID_COURSE:string;
	NameAssessmentSource:string;
	AssessmentMethod:string;
	DateCollection:string;
	Date:string;
	PersonInCharge:string;


	constructor(ID_COURSE:string, NameAssessmentSource:string,AssessmentMethod:string,PersonInCharge:string,DateCollection:string) {
		this.ID_COURSE=ID_COURSE;
		this.NameAssessmentSource=NameAssessmentSource;
		this.AssessmentMethod=AssessmentMethod;
		this.PersonInCharge=PersonInCharge;
		this.DateCollection=DateCollection;
		this.Date=DateCollection.toString();

	}



}

