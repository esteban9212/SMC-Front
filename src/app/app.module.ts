import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProgramsService } from './services/programs.service';
import { OutcomeService } from './services/outcome.service';
import { PlanAssessmentService } from './services/plan-assessment.service';
import { HttpModule,Headers } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    CreatePlanComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProgramsService,OutcomeService,PlanAssessmentService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
