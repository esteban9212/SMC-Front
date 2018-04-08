import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-torta',
  templateUrl: './torta.component.html',
  styleUrls: ['./torta.component.css']
})
export class TortaComponent {

  // Doughnut
  public doughnutChartLabels:string[] = ['CSS 0.5%','TypeScript 80%', 'HTML 14.2 %', 'JavasScript 5.3%'];
  public doughnutChartData:number[] = [0.5 ,80, 14.2,5.3];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
