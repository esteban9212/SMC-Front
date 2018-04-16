import { Component, OnInit ,Input} from '@angular/core';
import { Pi } from '../models/pi';
import { CDIOyPI } from '../models/cdiobypi';
import { CoursesMapping } from '../models/coursesMappping';
import { Observable } from 'rxjs/Rx';
import { PlanAssessmentService } from '../services/plan-assessment.service';
@Component({
  selector: 'app-cdio-row',
  templateUrl: './cdio-row.component.html',
  styleUrls: ['./cdio-row.component.css']
})
export class CdioRowComponent implements OnInit {
@Input() Pi:Pi;
@Input() Outcome:string;

	CDIOSObservable: Observable<any[]>;
	CDIOS: CDIOyPI[];

	coursesObservable: Observable<any[]>;
	courses: CoursesMapping[];



  constructor(private planAssessmentService:PlanAssessmentService) { }

  ngOnInit() {

  	this.CDIOSObservable=this.planAssessmentService.getCdioByPiId(this.Pi.ID_PI);

  	this.CDIOSObservable
		.subscribe((data)=> {
			this.CDIOS = data;
		});
  }

  getCourses(idCdio){


  	this.CDIOSObservable=this.planAssessmentService.getMappingCourses(idCdio);

  	this.coursesObservable
		.subscribe((data)=> {
			this.courses = data;
		});
console.log(this.courses);
  	return this.courses;
  }

}
