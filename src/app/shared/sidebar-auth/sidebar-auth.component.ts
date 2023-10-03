import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sidebar-auth',
  templateUrl: './sidebar-auth.component.html',
  styleUrls: ['./sidebar-auth.component.scss']
})
export class SidebarAuthComponent {
  authMenu:any =[
    {
      text: 'Home',
      link: '/auth'
    },
    {
      text: 'About',
      link: '/auth'
    },
    {
      text: 'Student Registration',
      link: '/auth/student-registration'
    },
    {
      text: 'Company Registration',
      link: '/auth/company-registration'
    },
    {
      text: 'Login',
      link: '/auth/login'
    },
    {
      text: 'Contact Us',
      link: '/auth'
    }
  ]
  studentMenu:any =[
    {
      text: 'Internship List',
      link: '/student-dashboard'
    },
    {
      text: 'Applied Internship',
      link: '/student-dashboard/applied'
    },
    {
      text: 'Profile',
      link: '/student-dashboard/profile'
    }
  ]
  companyMenu:any =[
    {
      text: ' Internship List',
      link: '/company-dashboard'
    },
    {
      text: ' Create Internship',
      link: 'create-internship'
    },
    {
      text: 'Profile',
      link: 'company-profile'
    }
  ]
  menuList:any=[];
  constructor(public commonService: CommonService,public authService: AuthService){}

  ngOnInit(): void {
    console.log(this.authService.isAuthenticated(),this.authService.isType())
  if(!this.authService.isAuthenticated() && this.authService.isAuthenticated() == null ){
    this.menuList = this.authMenu
  }
  else if(this.authService.isAuthenticated() && this.authService.isType() == 'company'){
    this.menuList = this.companyMenu;
  }
  else if(this.authService.isAuthenticated() && this.authService.isType() == 'student'){
    this.menuList = this.studentMenu;
  }
  }
  toggleClass() {
    this.commonService.mobileSidebar = !this.commonService.mobileSidebar;
  }
  logout(){
    this.toggleClass()
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
}
