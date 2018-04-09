import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProgramsService } from './services/programs.service';
import { OutcomeService } from './services/outcome.service';
import { PlanAssessmentService } from './services/plan-assessment.service';
import { Headers } from '@angular/http';
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
import {DataTableModule} from "angular2-datatable";
import { PruebatablaComponent } from './pruebatabla/pruebatabla.component';
import { DataFilterPipe } from './pipes/data-filter.pipe';
import { ChartsModule } from 'ng2-charts';
import { TortaComponent } from './torta/torta.component';
import { TortaBackComponent } from './torta-back/torta-back.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
//import {PopupModule} from 'ng2-opd-popup'



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    CreatePlanComponent,
    HomeComponent,
    SearchComponent,
    ListAssessmentComponent,
    PruebatablaComponent,
    DataFilterPipe,
    TortaComponent,
    TortaBackComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    DataTableModule,
    ChartsModule,
//     PopupModule.forRoot(),
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'create',component:CreatePlanComponent},
      {path:'search',component:SearchComponent},
      {path:'signin',component:SigninComponent},
      {path:'signup',component:SignupComponent},
      {path:'**',pathMatch:'full',redirectTo:'signin'}
      ])
  ],
  providers: [ProgramsService,OutcomeService,PlanAssessmentService,AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
