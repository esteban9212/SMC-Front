export class PlanAssessment {



	Idplan:string;
	Name:string;
	Ciclo:string;
	SubCiclo:string;
	Leader:string;
	Program:string;
	State:string;
	DateCreation:string;
	Author:string;
	Criterion:string;
	Description:string;
	DateEvaluation:string;
	
	
	constructor(Idplan:string, Name:string,Ciclo:string,SubCiclo:string,Leader:string,
				Program:string, State:string,DateCreation:string,Author:string,Criterion:string,Description:string,DateEvaluation:string) {
		this.Idplan=Idplan;
		this.State=State;
		this.Ciclo=Ciclo;
		this.SubCiclo=SubCiclo;
		this.Leader=Leader;
		this.Program=Program;
		this.Name=Name;
		this.DateCreation=DateCreation;
		this.Author=Author;
		this.Criterion=Criterion;
		this.Description=Description;
		this.DateEvaluation=DateEvaluation;
	}



//	  "ID_PROGRAM": "IND",
//    "NAME_PROGRAM": "Industrial Engineering",
 //   "FACULTY_ID_FACULTY": 2,
  //  "USER_CIP_ID_USER": 2836,
  //  "created_at": null,
  //  "updated_at": null
}
