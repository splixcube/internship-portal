import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CompanyGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('type') == 'company') {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
