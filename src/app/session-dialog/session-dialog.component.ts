import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-session-dialog',
  templateUrl: './session-dialog.component.html',
  styleUrls: ['./session-dialog.component.css']
})
export class SessionDialogComponent {
  reason: string = '';
reasonTouched: boolean = false;
  constructor(
    private authservice: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { partycode: string, partyname: string, status: string }
  ) { }

  active() {
    this.reasonTouched = true;
  if (!this.reason ) {
    return;
  }

    const payload = {
      partyCode: this.data.partycode,
      reason: this.reason
    };
    this.authservice.activecustomer(payload).subscribe({
      next: (res: any) => {
        this.snackBar.open(res.status, 'Close', {
          duration: 2000,
          verticalPosition: 'top',
        });
        this.dialog.closeAll();
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  inactive() {

  this.reasonTouched = true;
  if (!this.reason ) {
    return;
  }
    const payload = {
      partyCode: this.data.partycode,
      reason: this.reason
    };
    this.authservice.inactivecustomer(payload).subscribe({
      next: (res: any) => {
        this.snackBar.open(res.status, 'Close', {
          duration: 2000,
          verticalPosition: 'top',
        });
        this.dialog.closeAll();
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

}
