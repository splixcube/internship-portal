import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent {
  menuList:any;
constructor(public authService: AuthService,public commonService: CommonService){}

  logout(){
    this.commonService.openLogoutDialog().subscribe((result) => {
      if (result == true) {
        this.authService.logout().then(res=>{
          this.commonService.showToast(" Successfully Logout")
        }).catch(err=>{
          this.commonService.showToast("Error Occoured")
        })
      }
    });
  }
  toggleClass() {
    this.commonService.mobileSidebar = !this.commonService.mobileSidebar;
  }
}
