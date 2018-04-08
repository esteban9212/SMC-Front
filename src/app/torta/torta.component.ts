import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-torta',
  templateUrl: './torta.component.html',
  styleUrls: ['./torta.component.css']
})
export class TortaComponent {

  // Doughnut
  public doughnutChartLabels:string[] = ['CSS4.1%','TypeScript 69%', 'HTML 22.1%', 'JavasScript 3.9%'];
  public doughnutChartData:number[] = [4.1 ,69, 22.1,3.9];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
