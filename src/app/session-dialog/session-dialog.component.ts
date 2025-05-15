import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-session-dialog',
  templateUrl: './session-dialog.component.html',
  styleUrls: ['./session-dialog.component.css']
})
export class SessionDialogComponent {
  reason: string = '';

  constructor(
    private authservice: AuthService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { partycode: string, partyname: string,status: string }
  ) {}

  active() {
   
    const payload = {
      partyCode: this.data.partycode,
      reason: this.reason
    };
    this.authservice.activecustomer(payload).subscribe({
      next: (res: any) => {
        alert(res.status);
        this.dialog.closeAll();
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  inactive() {
  
   
    const payload = {
      partyCode: this.data.partycode,
      reason: this.reason
    };
    this.authservice.inactivecustomer(payload).subscribe({
      next: (res: any) => {
        alert(res.status);
        this.dialog.closeAll();
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  back() {
    this.dialog.closeAll();
  }
}
