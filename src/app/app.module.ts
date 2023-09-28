import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './auth/student-registration/student-registration.component';
import { CompanyRegistrationComponent } from './auth/company-registration/company-registration.component';
import { CompanyLoginComponent } from './auth/company-login/company-login.component';
import { StudentLoginComponent } from './auth/student-login/student-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { InternshipListingComponent } from './student-dashboard/internship-listing/internship-listing.component';
import { InternshipsAppliedComponent } from './student-dashboard/internships-applied/internships-applied.component';
import { MyInternshipsComponent } from './company-dashboard/my-internships/my-internships.component';
import { StudentsAppliedComponent } from './company-dashboard/students-applied/students-applied.component';
import { CreateEditInternshipComponent } from './company-dashboard/create-edit-internship/create-edit-internship.component';
import { UpdateProfileComponent } from './company-dashboard/update-profile/update-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './shared/loader/loader.component';
import { AuthComponent } from './services/auth/auth.component';
import { StudentComponent } from './services/student/student.component';
import { CompanyComponent } from './services/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    CompanyRegistrationComponent,
    CompanyLoginComponent,
    StudentLoginComponent,
    StudentDashboardComponent,
    CompanyDashboardComponent,
    InternshipListingComponent,
    InternshipsAppliedComponent,
    MyInternshipsComponent,
    StudentsAppliedComponent,
    CreateEditInternshipComponent,
    UpdateProfileComponent,
    LoaderComponent,
    AuthComponent,
    StudentComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
