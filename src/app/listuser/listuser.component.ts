import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Username', 'UserId', 'mobilenumber','email','ActiveSession','edit','delete'];

  dataSource = new MatTableDataSource<any>(); 
 

  @ViewChild(MatPaginator) paginator!: MatPaginator; 

  constructor(private authService: AuthService, private router:Router,private snackBar:MatSnackBar) {}

  ngOnInit(): void {
    this.fetchUsers(); 
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; 
  }

  fetchUsers(): void {
    const tabledata = {
      entityTypeCode: 'API_GW_PARTY',
      filters: [
       
      ],
      pagination: {
        pageSize: 1000,
        pageIndex: 0
      },
      sorting: {
        key: 'createdOn',
        value: 'asc'
      }
    };

    this.authService.fetchtableuser(tabledata).subscribe({
      next: (res: any) => {
        this.dataSource.data = res.usersList; 
      },
      error: (err: any) => {
        console.error(err);
        alert('Error during fetching the user list');
      }
    });
  }

  deleterow(row: any): void {
    const currentdata = this.dataSource.data;
    this.dataSource.data = currentdata.filter(user => user !== row); 
  this.snackBar.open('User deleted successfully', 'Close', {
              duration: 2000,
              verticalPosition: 'top',
            });
  }


navigateToModify(user: any): void {
  this.router.navigate(['/landingpage/modify'], { queryParams: {
      userName: user.PARTY_NAME,
      userId: user.PARTY_CODE,
      userEmailaddress: user.EMAIL_ADDRESS,
      userMobilenumber: user.MOBILE_NUMBER,
    }}); 
}

}



