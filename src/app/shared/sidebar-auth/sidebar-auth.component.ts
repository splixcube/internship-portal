import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
      link: '/home'
    },
    {
      text: 'About',
      link: '/home',
      id: 'about'
    },
    {
      text: 'Student Registration',
      link: '/student-registration'
    },
    {
      text: 'Company Registration',
      link: '/company-registration'
    },
    {
      text: 'Login',
      link: '/login'
    },
    {
      text: 'Contact Us',
      link: '/home',
      id: 'contact'
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
  constructor(public commonService: CommonService,public router: Router,
    public authService: AuthService){}

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
  goTo(item:any){
    this.toggleClass()
    if(item.link && !item.id){
      console.log('ds')
      this.router.navigate([item.link])
    }
    else{
      if(item.id == 'about'){
        console.log('a')
        this.router.navigate([item.link])
        this.scrollToAbout()
      }
      else{
        console.log('c')
        this.router.navigate([item.link])
this.scrolltoContact()
      }
    }
   
  }
  scrolltoContact(){
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToAbout(){
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
