import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { PlanAssessmentService } from '../services/plan-assessment.service';
import { Observable } from 'rxjs/Rx';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from "@angular/router";


@Component({
  selector: 'app-pruebatabla',
  templateUrl: './pruebatabla.component.html',
  styleUrls: ['./pruebatabla.component.css']
})
export class PruebatablaComponent implements OnInit {

  public dataObservable:  Observable<any[]>;
  public data:  any[];

  public filterQuery = "";
  public rowsOnPage = 6;
  public sortBy = "Ciclo";
  public sortOrder = "desc";

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
      custom: [{ name: 'goTo', title: '<i class="fas fa-edit"></i>' }]
    },
    columns: {
      Idplan: {
        title: '#',
        type: 'number',
      },
      Name: {
        title: 'Name Plan',
        type: 'string',
      },
      Ciclo: {
        title: 'Cycle',
        type: 'string',
      },
      SubCiclo: {
        title: 'Subcycle',
        type: 'string',
      },
      Program: {
        title: 'Program',
        type: 'string',
      },
      Leader: {
        title: 'Leader',
        type: 'number',
      },
      State: {
        title: 'State',
        type: 'number',
      },
      DateCreation: {
        title: 'Creation Date',
        type: 'string',
      },
      Author: {
        title: 'Author',
        type: 'number',
      },
    },
  };

    source: LocalDataSource = new LocalDataSource();



  constructor(private _http: Http,private planAssessmentService:PlanAssessmentService, private router: Router) { }

  ngOnInit() {


 this.dataObservable = this.planAssessmentService.getPlans();
  	this.dataObservable
      .subscribe((data)=> {
          this.data = data;
          this.source.load(data);
      });
  }

  onEdit(event): void {
    let idplan:number;
    idplan=event.data.Idplan;

      this.router.navigate(['/search/'+idplan]);
  }

}
