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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './shared/loader/loader.component';
import { UpdateProfileComponent } from './student-dashboard/update-profile/update-profile.component';
import { ViewInternshipModalComponent } from './shared/view-internship-modal/view-internship-modal.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';
import { CompanyProfileComponent } from './company-dashboard/company-profile/company-profile.component';
import { ViewInternshipComponent } from './shared/view-internship/view-internship.component';
import { ViewCompanyComponent } from './shared/view-company/view-company.component';
import { ViewStudentComponent } from './shared/view-student/view-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
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
    ViewInternshipModalComponent,
    ConfirmModalComponent,
    CompanyProfileComponent,
    ViewInternshipComponent,
    ViewCompanyComponent,
    ViewStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
