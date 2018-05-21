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
  newChecked: boolean;
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
  public model: any = { date: { year: 2018, month: 5, day: 1 } };


      settings = {
    mode: 'inline',
    actions: {
      edit: false,
      add:false,
      delete:false, //as an example
      custom: [{ name: 'goTo', title: '<i class="fas fa-edit"></i>' }],
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
   this.newChecked = false;
   this.selectedDate = "2018-5-1";

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
                }
              }
            }
          }
        }

  }

  myFunc(): void{
    this.checked = false;

    this.actualIdAsSrc1 = this.AssessmentSources2.find(x=>x.COURSE_ID_COURSE == this.actualIdAsSrc).ID_AS_SRC;

    if(this.assessmentSelected != null){
      var assessment:any;
      assessment = this.MappingCourses.find(x=>x.ID_COURSE == this.assessmentSelected).NAME_COURSE;
      this.AssessmentCourses[this.actualIndex].NameAssessmentSource = assessment;
      
      this.planAssessmentService.updateAS1(this.actualIdAsSrc1,this.assessmentSelected);
          this.source.update(this.currentRow,this.currentRow);
    alert("Assessment Plan Updated"); 
    }

    if(this.methodSelected != null){
      var method:any;
      method = this.allMethods.find(x=>x.ID_AS_METHOD == this.methodSelected).NAME;
      this.AssessmentCourses[this.actualIndex].AssessmentMethod = method;

      this.planAssessmentService.updateAS3(this.actualIdAsSrc1,this.methodSelected);
          this.source.update(this.currentRow,this.currentRow);

    alert("Assessment Plan Updated"); 
    }

    if(this.personSelected != null){
      var profe:any;
      profe = this.allProfessors.find(x=>x.IdUserCip == this.personSelected).NameUserCip;
      this.AssessmentCourses[this.actualIndex].PersonInCharge = profe;
      this.planAssessmentService.updateAS4(this.actualIdAsSrc1,this.personSelected);
          this.source.update(this.currentRow,this.currentRow);

    alert("Assessment Plan Updated"); 
    }

    if(this.selectedDate != null){
      this.AssessmentCourses[this.actualIndex].DateCollection = this.selectedDate+" 00:00:00.000000";
      
      this.planAssessmentService.updateAS2(this.actualIdAsSrc1,this.selectedDate);
          this.source.update(this.currentRow,this.currentRow);

    alert("Assessment Plan Updated"); 
    }

    this.actualIdPro = this.allProfessors.find(x=>x.NameUserCip == this.actualAssessmentCourse.PersonInCharge).IdUserCip;
                
    if(this.assessmentSelected == null && this.methodSelected == null && this.personSelected == null && this.selectedDate == null){
      alert("To edit, please select one option");
    }

    this.assessmentSelected = null;
    this.methodSelected = null;
    this.personSelected = null;
    this.selectedDate = "2018-5-1";
    
    alert("Assessment Plan Updated");  
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

  enableNewAS(){
    if(this.newChecked != true){
      this.newChecked = true;
    }else{
      this.newChecked = false;
    }
    
  }

  deleteAS():void{

      this.actualIdAsSrc1 = this.AssessmentSources2.find(x=>x.COURSE_ID_COURSE == this.actualIdAsSrc).ID_AS_SRC;

      console.log(this.actualIdAsSrc1);

      let idMethod = this.allMethods.find(x=>x.NAME == this.assessmentMethod).ID_AS_METHOD;

      console.log(idMethod);

      var AsSrcDelete:AssessmentC;

      AsSrcDelete = this.AssessmentSources2.find(x=>x.ID_AS_SRC == this.actualIdAsSrc1);

      console.log(AsSrcDelete);

      console.log(this.actualAssessmentCourse);
      console.log(this.allProfessors);

      let idProf = this.allProfessors.find(x=>x.NameUserCip.replace(/ /g,'') == this.actualAssessmentCourse.PersonInCharge.replace(/ /g,'')).IdUserCip;

      console.log(AsSrcDelete.USER_CIP_ID_USER);

      console.log(idProf);

      if(AsSrcDelete.USER_CIP_ID_USER == idProf){
        console.log("Entro");
        if(AsSrcDelete.METHOD_ID_AS_METHOD == idMethod){
          let confirmation = confirm("Confirm deletion of Assessment Source");
          console.log("Entro");
          if(confirmation == true){
            this.AssessmentCourses.splice(this.actualIndex,1);
            this.source.update(this.currentRow,this.currentRow);
            this.planAssessmentService.destroy(this.actualIdAsSrc1);
            this.source.update(this.currentRow,this.currentRow);
            alert("Assessment Plan Deleted")
            window.location.reload();
          }
        }
      }

  }

  createNewAssessment(): void{

    if(this.assessmentSelected != null){
      var newAS = new AssessmentCourse("", "", "", "", "");
      var assessment:any;
      assessment = this.MappingCourses.find(x=>x.ID_COURSE == this.assessmentSelected).NAME_COURSE;
      newAS.NameAssessmentSource = assessment;

      if(this.methodSelected != null){
        var method:any;
        method = this.allMethods.find(x=>x.ID_AS_METHOD == this.methodSelected).NAME;
        newAS.AssessmentMethod = method;

        if(this.personSelected != null){
          var profe:any;
          profe = this.allProfessors.find(x=>x.IdUserCip == this.personSelected).NameUserCip;
          newAS.PersonInCharge = profe;

          if(this.selectedDate != null){
          newAS.Date = this.selectedDate+" 00:00:00.000000";

          this.newChecked = false;

          this.planAssessmentService.createAS(this.idpi, this.assessmentSelected, this.selectedDate, this.methodSelected, this.personSelected);

          this.source.prepend(newAS);

          this.source.update(this.currentRow,this.currentRow);

          window.location.reload();

          alert("Assessment Source Created");

          }else{
            alert("Please select a collection date")
          }
        }else{
          alert("Please select a person in charge")
        }
      }else{
        alert("Please select a method of assessment")
      }
    }else{
      alert("Please select a Source of Assessment")
    }
  }

  cancelAdd(){
    this.newChecked = false;

    this.assessmentSelected = null;
    this.methodSelected = null;
    this.personSelected = null;
    this.selectedDate = "2018-5-1";
    this.model = { date: { year: 2018, month: 5, day: 1 } };
  }

  cancelEdit(){
    this.checked = false;

    this.assessmentSelected = null;
    this.methodSelected = null;
    this.personSelected = null;
    this.selectedDate = "2018-5-1";
    this.model = { date: { year: 2018, month: 5, day: 1 } };
  }
}




