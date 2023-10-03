import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmModalComponent } from '../shared/confirm-modal/confirm-modal.component';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  loader = false;
  mobileSidebar = false;
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

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

  openDeleteDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog';
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {
        title: 'Delete Confirmation',
        message: 'Do you want to delete?',
      },
    });
    return dialogRef.afterClosed();
  }
  openLogoutDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog';
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {
        title: 'Logout Confirmation',
        message: 'Do you want to logout?',
      },
    });
    return dialogRef.afterClosed();
  }
  openCustomDialog( message:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog';
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {
        title: 'Confirmation',
        message: message,
      },
    });
    return dialogRef.afterClosed();
  }
}
