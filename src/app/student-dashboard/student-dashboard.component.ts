import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent {
  constructor(public authService: AuthService,public commonService:CommonService){}

  logout(){
    this.commonService.openLogoutDialog().subscribe((result) => {
      if (result == true) {
        this.authService.logout().then(res=>{
          this.commonService.showToast("Deleted Successfully")
        }).catch(err=>{
          this.commonService.showToast("Error Occoured")
        })
      }
    });
  }
}
