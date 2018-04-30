import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { Pi } from '../models/pi';
import { PlanAssessmentService } from '../services/plan-assessment.service';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent implements OnInit {

	idplan:number;
	idpi:number;
	pi:Pi;
	codePi:string;
	descriptionPi:string;


  constructor(private router: Router,private route: ActivatedRoute, private planAssessmentService:PlanAssessmentService) { }

  ngOnInit() {

  	this.route.params
      .subscribe(params => {
        const _id = params['idPlan'].toString();
        const __id = params['idPi'].toString();
        this.idplan = _id;
        this.idpi = __id;
      });

   		let piObservable = this.planAssessmentService.getPiByPlanIdPiId(this.idplan, this.idpi);

		piObservable.subscribe((data)=> {
			this.pi = data;
			this.codePi = this.pi.CodePi;
			this.descriptionPi = this.pi.DescriptionPi;
			console.log(this.codePi);
			console.log(this.descriptionPi);
		});
  }

}
