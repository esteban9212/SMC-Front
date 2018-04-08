import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-torta-back',
  templateUrl: './torta-back.component.html',
  styleUrls: ['./torta-back.component.css']
})
export class TortaBackComponent {

  // Doughnut
  public doughnutChartLabels:string[] = ['Vue 0.3%','HTML 10.9%', 'PHP 88.8%'];
  public doughnutChartData:number[] = [0.3 ,10.9 , 88.8];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
