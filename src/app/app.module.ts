import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProgramsService } from './services/programs.service';
import { OutcomeService } from './services/outcome.service';
import { PlanAssessmentService } from './services/plan-assessment.service';
import { HttpModule,Headers } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { ListAssessmentComponent } from './list-assessment/list-assessment.component';
//import {PopupModule} from 'ng2-opd-popup'



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    CreatePlanComponent,
    HomeComponent,
    SearchComponent,
    ListAssessmentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
//     PopupModule.forRoot(),
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'create',component:CreatePlanComponent},
      {path:'search',component:SearchComponent},
      {path:'**',pathMatch:'full',redirectTo:'home'}
      ])
  ],
  providers: [ProgramsService,OutcomeService,PlanAssessmentService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
