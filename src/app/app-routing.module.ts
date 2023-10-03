import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { StudentLoginComponent } from './auth/student-login/student-login.component';
import { StudentRegistrationComponent } from './auth/student-registration/student-registration.component';
import { CompanyLoginComponent } from './auth/company-login/company-login.component';
import { CompanyRegistrationComponent } from './auth/company-registration/company-registration.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { InternshipListingComponent } from './student-dashboard/internship-listing/internship-listing.component';
import { InternshipsAppliedComponent } from './student-dashboard/internships-applied/internships-applied.component';
import { UpdateProfileComponent } from './student-dashboard/update-profile/update-profile.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { MyInternshipsComponent } from './company-dashboard/my-internships/my-internships.component';
import { StudentsAppliedComponent } from './company-dashboard/students-applied/students-applied.component';
import { AuthGuardService } from './guards/auth.guard';
import { StudentGuardService } from './guards/student.guard';
import { CompanyGuardService } from './guards/company.guard';
import { CreateEditInternshipComponent } from './company-dashboard/create-edit-internship/create-edit-internship.component';
import { CompanyProfileComponent } from './company-dashboard/company-profile/company-profile.component';
import { ViewStudentComponent } from './shared/view-student/view-student.component';
import { ViewInternshipComponent } from './shared/view-internship/view-internship.component';
import { ViewCompanyComponent } from './shared/view-company/view-company.component';
import { HomeComponent } from './auth/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', component: HomeComponent },
   
      { path: 'login', component: StudentLoginComponent },
      { path: 'student-registration', component: StudentRegistrationComponent },
     /*  { path: 'company-login', component: CompanyLoginComponent }, */
      { path: 'company-registration', component: CompanyRegistrationComponent },
      { path: ':fragment', component: HomeComponent },
    ],
  },
  {
    path: 'student-dashboard',
    component: StudentDashboardComponent,
    children: [
      { path: '', component: InternshipListingComponent },
      { path: 'applied', component: InternshipsAppliedComponent },
      { path: 'profile', component: UpdateProfileComponent },
      { path: 'view-student/:id', component: ViewStudentComponent },
      { path: 'view-internship/:id', component: ViewInternshipComponent },
      { path: 'view-company/:id', component: ViewCompanyComponent },
    ],
    canActivate: [AuthGuardService, StudentGuardService],
  },
  {
    path: 'company-dashboard',
    component: CompanyDashboardComponent,
    children: [
      { path: '', component: MyInternshipsComponent },
      { path: 'company-profile', component: CompanyProfileComponent },
      { path: 'create-internship', component: CreateEditInternshipComponent },     
      { path: 'edit-internship/:id', component: CreateEditInternshipComponent },
      { path: 'applied-students/:id', component: StudentsAppliedComponent },
      { path: 'view-student/:id', component: ViewStudentComponent },
      { path: 'view-internship/:id', component: ViewInternshipComponent },
      { path: 'view-company/:id', component: ViewCompanyComponent },
    ],
   canActivate: [AuthGuardService, CompanyGuardService], 
  },
  { path: '**', redirectTo: '/auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
