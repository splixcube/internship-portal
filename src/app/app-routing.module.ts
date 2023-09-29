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

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'student-login', component: StudentLoginComponent },
      { path: 'student-registration', component: StudentRegistrationComponent },
      { path: 'company-login', component: CompanyLoginComponent },
      { path: 'company-registration', component: CompanyRegistrationComponent },
    ],
  },
  {
    path: 'student-dashboard',
    component: StudentDashboardComponent,
    children: [
      { path: 'internships', component: InternshipListingComponent },
      { path: 'applied', component: InternshipsAppliedComponent },
      { path: 'profile', component: UpdateProfileComponent },
    ],
    canActivate: [AuthGuardService, StudentGuardService],
  },
  {
    path: 'company-dashboard',
    component: CompanyDashboardComponent,
    children: [
      { path: 'my-internships', component: MyInternshipsComponent },
      { path: 'applied-students/:id', component: StudentsAppliedComponent },
    ],
    canActivate: [AuthGuardService, CompanyGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
