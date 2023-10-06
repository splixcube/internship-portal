import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    /* {
      text: 'Login',
      link: '/login'
    }, */
    {
      text: 'Contact Us',
      link: '/home',
      id: 'contact'
    }
  ]
  homeMenu:any =[
    {
      text: 'Home',
      link: '/home',
      id: 'home'
    },
    {
      text: 'About',
      link: '/home',
      id: 'about'
    },
    {
      text: 'Contact Us',
      link: '/home',
      id: 'contact'
    }
  ]
  studentMenu:any =[
    {
      text: 'Search Internship',
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
      text: ' Search Internship',
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
 // menuList:any=[];
  currentRoute:any;
  @Input() menuList:any;
  @Input() showDashboard:any = false;
  constructor(public commonService: CommonService,public router: Router,
    public route: ActivatedRoute,
    public authService: AuthService){}

  ngOnInit(): void {
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
      this.router.navigate([item.link])
    }
    else{
      if(item.id == 'about'){
        this.router.navigate([item.link])
        this.scrollToAbout()
      }
     else if(item.id == 'home'){
        this.router.navigate([item.link])
        this.scrollToHome()
      }
      else{
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
  scrollToHome(){
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
