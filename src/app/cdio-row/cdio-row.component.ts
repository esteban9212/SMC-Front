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
console.log("pi");
console.log(this.Pi);
  }

  getCourses(idCdio){


  }

}
