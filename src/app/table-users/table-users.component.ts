import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Rx';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from "@angular/router";
import { UserRols } from '../models/userRols';
import { ProgramsService } from '../services/programs.service';
import { OutcomeService } from '../services/outcome.service';
import { Program } from '../models/program';
import { Outcome } from '../models/outcome';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})

export class TableUsersComponent implements OnInit {

  public dataObservable:  Observable<UserRols[]>;
  public data:  UserRols[];

  public filterQuery = "";
  public rowsOnPage = 6;
  public sortBy = "NameUserCip";
  public sortOrder = "desc";

  	userName:string;
    userId:string;

    programsObser:Observable<Program[]>;
    programs:Program[];

	outcomesObser:Observable<Outcome[]>;
	outcomes:Outcome[];




	programSelected:any;
	outcomeSelected:any;


    settings = {
    mode: 'inline',
    add: {
      addButtonContent: '<i class="nb-plus" aria-hidden="true"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="fas fa-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash" aria-hidden="true"></i>',
      confirmDelete: true,
    },
    actions: {
      edit: false, //as an example
      custom: [{ name: 'goTo', title: '<i class="fas fa-arrow-alt-circle-right"></i>' }]
    },
    columns: {
      IdUserCip: {
        title: '#',
        type: 'string',
      },
      NameUserCip: {
        title: 'Name User',
        type: 'string',
      },
      EmailUser: {
        title: 'Email user',
        type: 'string',
      },
       RolsUser: {
        title: 'Rols',
        type: 'string',
      },
    }
  };


    source: LocalDataSource = new LocalDataSource();



  constructor(private _http: Http, private router: Router,private userService:UserService,private programsService:ProgramsService,
  	private outcomeService:OutcomeService) { 

 
}

  ngOnInit() {


  this.dataObservable = this.userService.getAllUsers();
  	this.dataObservable.subscribe((data)=> {
          this.data = data;
          this.source.load(data);

      });

	this.programsObser= this.programsService.getPrograms();
	this.programsObser.subscribe((data)=> {
         this.programs = data;
      });

  }

  onEdit(event): void {

    this.userName=event.data.NameUserCip;
    this.userId=event.data.IdUserCip;
    console.log(this.userName);
    console.log(this.userId);
     // this.router.navigate(['/search/'+idplan]);
  }



	onChangeProgram(newValue) {
		this.programSelected = newValue;
		console.log(this.programSelected);
		this.outcomesObser= this.outcomeService.getOutcomesActiveByProgram(this.programSelected);

		this.outcomesObser.subscribe((data)=> {
          this.outcomes = data;
     
      });
	}

	onChangeOutcome(newValue) {
		

		this.outcomeSelected = newValue; 
		console.log(this.outcomeSelected);

	}

	asignarOutcome(){
		console.log(this.programSelected);
		console.log(this.outcomeSelected);
		console.log(this.userId);
	}

  onUserRowSelect(event): void {
    console.log(event);
    
    this.userName=event.data.NameUserCip;
    this.userId=event.data.IdUserCip;
}



}
