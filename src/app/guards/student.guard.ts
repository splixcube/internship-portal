import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class StudentGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('type') == 'student') {
      return true;
    } else {
      this.router.navigate(['/company-dashboard']);
      return false;
    }
  }
}
