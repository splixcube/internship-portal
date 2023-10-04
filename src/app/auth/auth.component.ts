import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(public commonService: CommonService,public authService: AuthService){}
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
  toggleClass() {
    this.commonService.mobileSidebar = !this.commonService.mobileSidebar;
  }
}
