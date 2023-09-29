import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  loader = false;
  constructor(private _snackBar: MatSnackBar) {}

  showLoader() {
    this.loader = true;
  }

  hideLoader() {
    this.loader = false;
  }

  showToast(message: any) {
    this._snackBar.open(message);
  }

  showError(message) {
    this._snackBar.open(message);
  }
}
