import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  menuList:any;
  constructor(public commonService: CommonService,public authService: AuthService){}
  scrolltoContact(){
    setTimeout(() => {
      const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    }, 1000);
    
  }
  scrollToAbout(){
    setTimeout(() => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 1000);
  }
  scrollToHome(){
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  toggleClass() {
    this.commonService.mobileSidebar = !this.commonService.mobileSidebar;
  }
}
