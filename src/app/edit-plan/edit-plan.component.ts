import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { Pi } from '../models/pi';
import { PlanAssessmentService } from '../services/plan-assessment.service';
import { CDIOyPI } from '../models/cdiobypi';
import { CoursesMapping } from '../models/coursesMappping';
import { LocalDataSource } from 'ng2-smart-table';
import { AssessmentCourse } from '../models/assessmentCourse';
import { MethodService } from '../services/method.service';
import { UserService } from '../services/user.service';
import { UserRols } from '../models/userRols';
import { Observable } from 'rxjs/Rx';
import { Method } from '../models/method';
import { AssessmentC } from '../models/assessmentC';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

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
  Cdios:CDIOyPI[];
  checked: boolean;
  MappingCourses:CoursesMapping[];
  AssessmentCourses:AssessmentCourse[];
  nameAssessmentSource : string;
  assessmentMethod : string;
  dateCollection : string;
  personInCharge : string;
  actualIndex : number;
  actualAssessmentCourse:AssessmentCourse;
  actualIdAsSrc:any;
  actualIdAsSrc1:any;
  actualIdPro:any;
  methods:Observable<Method[]>;
  allMethods:Method[];
  allProfessors:UserRols[];
  professors:Observable<UserRols[]>;
  AssessmentSources1: Observable<any[]>;
  AssessmentSources2: AssessmentC[];

  currentRow:any;

  assessmentSelected:any;
  methodSelected:any;
  personSelected:any;
  selectedDate:any;


  public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    // Initialized to specific date (09.10.2018).
  public model: any = { date: { year: 2018, month: 10, day: 9 } };


      settings = {
    mode: 'inline',
    add: {
      addButtonContent: '<i class="fas fa-plus"></i>',
      createButtonContent: '<i class="fas fa-check"></i>',
      cancelButtonContent: '<i class="fas fa-times"></i>',
    },
    edit: {
      editButtonContent: '<i class="fas fa-edit"></i>',
      saveButtonContent: '<i class="fas fa-check"></i>',
      cancelButtonContent: '<i class="fas fa-times"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fas fa-trash" ></i>',
      confirmDelete: true,
    },
    actions: {
      edit: false, //as an example
      custom: [{ name: 'goTo', title: '<i class="fas fa-edit"></i>' }]
    },
    columns: {
      NameAssessmentSource: {
        title: 'Assessment Source',
        type: 'string',
      },
      AssessmentMethod: {
        title: 'Assessment Method',
        type: 'string',
      },
      DateCollection: {
        title: 'Collection Date',
        type: 'string',
      },
      PersonInCharge: {
        title: 'Person In Charge',
        type: 'string',
      },
    },
  };

   source: LocalDataSource = new LocalDataSource();


  constructor(private router: Router,private route: ActivatedRoute, 
    private planAssessmentService:PlanAssessmentService,
    private methodsService:MethodService, private userService:UserService) { }

  ngOnInit() {

   this.checked = false;
   console.log(this.checked);

   this.methods = this.methodsService.allMethods();
   this.professors = this.userService.getAllProfessors();

  	this.route.params
      .subscribe(params => {
        const _id = params['idPlan'].toString();
        const __id = params['idPi'].toString();
        this.idplan = _id;
        this.idpi = __id;
      });

   	let piObservable = this.planAssessmentService.getPiByPlanIdPiId(this.idplan, this.idpi);

    this.AssessmentSources1 = this.planAssessmentService.assessmentSourcesByPiId(this.idplan);

		piObservable.subscribe((data)=> {
			this.pi = data;
			this.codePi = this.pi.CodePi;
      this.MappingCourses = this.pi.MappingCourses;
			this.descriptionPi = this.pi.DescriptionPi;
      for(var i = 0; i < data.AssessmentCourses.length; i++) { 
         data.AssessmentCourses[i].DateCollection = data.AssessmentCourses[i].DateCollection.date; 
      }
      this.AssessmentCourses = data.AssessmentCourses;
      this.source.load(this.AssessmentCourses);
		});

    this.AssessmentSources1.subscribe(asse=>
      {
         this.AssessmentSources2 = asse;
      });

    this.professors.subscribe(met=>{
        this.allProfessors = met;
      });

    this.methods.subscribe(met=>{
        this.allMethods = met;
      });
  }

  onEdit(event): void {
      this.checked = true;
      console.log(this.checked);
      console.log(this.AssessmentSources2);

      this.currentRow = event.data;

      this.nameAssessmentSource = event.data.NameAssessmentSource;
      this.assessmentMethod = event.data.AssessmentMethod;
      this.dateCollection = event.data.DateCollection;
      this.personInCharge = event.data.PersonInCharge;

      for (var i = 0; i <= this.AssessmentCourses.length; i++) {
        if(this.AssessmentCourses[i].NameAssessmentSource === this.nameAssessmentSource){
          if(this.AssessmentCourses[i].AssessmentMethod === this.assessmentMethod){
            if(this.AssessmentCourses[i].DateCollection === this.dateCollection){
              if(this.AssessmentCourses[i].PersonInCharge === this.personInCharge){
                this.actualAssessmentCourse = this.AssessmentCourses[i];
                this.actualIdAsSrc = this.MappingCourses.find(x=>x.NAME_COURSE == this.AssessmentCourses[i].NameAssessmentSource).ID_COURSE;
                this.actualIndex = i;
                console.log(this.actualIdAsSrc);
                console.log(this.actualAssessmentCourse);
                }
              }
            }
          }
        }
  }

  myFunc(): void{
    this.checked = false;
    console.log(this.checked);
    if(this.assessmentSelected != null){
      console.log(this.assessmentSelected);
      var assessment:any;
      assessment = this.MappingCourses.find(x=>x.ID_COURSE == this.assessmentSelected).NAME_COURSE;
      console.log(assessment);
      this.AssessmentCourses[this.actualIndex].NameAssessmentSource = assessment;
    }

    if(this.methodSelected != null){
      console.log(this.methodSelected);
      var method:any;
      method = this.allMethods.find(x=>x.ID_AS_METHOD == this.methodSelected).NAME;
      console.log(method);
      this.AssessmentCourses[this.actualIndex].AssessmentMethod = method;
    }

    if(this.personSelected != null){
      console.log(this.personSelected);
      var profe:any;
      profe = this.allProfessors.find(x=>x.IdUserCip == this.personSelected).NameUserCip;
      this.AssessmentCourses[this.actualIndex].PersonInCharge = profe;
    }

    if(this.selectedDate != null){
      console.log(this.selectedDate);
      this.AssessmentCourses[this.actualIndex].DateCollection = this.selectedDate+" 00:00:00.000000";
    }

    console.log(this.AssessmentCourses[this.actualIndex]);
    this.source.update(this.currentRow,this.currentRow);

    this.actualIdPro = this.allProfessors.find(x=>x.NameUserCip == this.actualAssessmentCourse.PersonInCharge).IdUserCip;

    console.log(this.assessmentSelected);
    console.log(this.selectedDate);
    console.log(this.methodSelected);
    console.log(this.personSelected);

    this.actualIdAsSrc1 = this.AssessmentSources2.find(x=>x.COURSE_ID_COURSE == this.actualIdAsSrc).ID_AS_SRC;

    this.planAssessmentService.updateAS(this.actualIdAsSrc1,this.assessmentSelected,this.selectedDate,this.methodSelected,this.personSelected);
  }

  onChangeAssessment(newAssessment):void {
    this.assessmentSelected = newAssessment;
  }

  onChangeMethod(newMethod):void {
    this.methodSelected = newMethod;
  }

  onChangePerson(newPerson):void {
    this.personSelected = newPerson;
  }

  onDateChanged(event: IMyDateModel) {
    this.selectedDate = ""+event.date.year+"-"+event.date.month+"-"+event.date.day;
  }


}




