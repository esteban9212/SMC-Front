import { CDIOyPI } from '../models/cdiobypi';
import { CoursesMapping } from '../models/coursesMappping';
import { AssessmentCourse } from '../models/assessmentCourse';
export class Pi {

	Idpi:string;
	CodePi:string;
	DescriptionPi:string;
	PLAN_ID_PLAN:string;
	Cdios:CDIOyPI[];
	MappingCourses:CoursesMapping[];
	AssessmentCourses:AssessmentCourse[];


	constructor(Idpi:string, CodePi:string,DescriptionPi:string,PLAN_ID_PLAN:string,Cdios:CDIOyPI[],MappingCourses:CoursesMapping[],AssessmentCourses:AssessmentCourse[]) {
		this.Idpi=Idpi;
		this.CodePi=CodePi;
		this.DescriptionPi=DescriptionPi;
		this.PLAN_ID_PLAN=PLAN_ID_PLAN;
		this.Cdios=Cdios;
		this.MappingCourses=MappingCourses;
		this.AssessmentCourses=AssessmentCourses;

	}

	 setCdios(cdios){
		this.Cdios=cdios;

	}

		setMapeo(mapeoCursos){
		this.MappingCourses=mapeoCursos;

	}

		setAssessmentSource(assessmentSources){
		this.AssessmentCourses=assessmentSources;

	}



}