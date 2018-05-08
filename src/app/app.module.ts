import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProgramsService } from './services/programs.service';
import { OutcomeService } from './services/outcome.service';
import { UserService } from './services/user.service';
import { PlanAssessmentService } from './services/plan-assessment.service';
import { Headers } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule,Routes } from '@angular/router';
import { ListAssessmentComponent } from './list-assessment/list-assessment.component';
import { DataTableModule } from "angular2-datatable";
import { PruebatablaComponent } from './pruebatabla/pruebatabla.component';
import { DataFilterPipe } from './pipes/data-filter.pipe';
import { ChartsModule } from 'ng2-charts';
import { TortaComponent } from './torta/torta.component';
import { TortaBackComponent } from './torta-back/torta-back.component';
import { SigninComponent } from './signin/signin.component';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { PlanInfoComponent } from './plan-info/plan-info.component';
import { CdioRowComponent } from './cdio-row/cdio-row.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditPlanComponent } from './edit-plan/edit-plan.component';
import { TableUsersComponent } from './table-users/table-users.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MethodService } from './services/method.service';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreatePlanComponent,
    HomeComponent,
    SearchComponent,
    ListAssessmentComponent,
    PruebatablaComponent,
    DataFilterPipe,
    TortaComponent,
    TortaBackComponent,
    SigninComponent,
    PlanInfoComponent,
    CdioRowComponent,
    EditPlanComponent,
    TableUsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgbModule.forRoot(),
    Ng2SmartTableModule,
    DataTableModule,
    ChartsModule,
    MyDatePickerModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'create',component:CreatePlanComponent},
      {path:'assign',component:TableUsersComponent},
      {path:'search/:idPlan',component:SearchComponent},
      {path:'signin',component:SigninComponent},
      {path:'edit/:idPlan/:idPi',component:EditPlanComponent},
      {path:'**',pathMatch:'full',redirectTo:'signin'}
      ])
  ],
  providers: [ProgramsService,OutcomeService,PlanAssessmentService,UserService,AuthService,MethodService],
  bootstrap: [AppComponent],
})
export class AppModule { }
