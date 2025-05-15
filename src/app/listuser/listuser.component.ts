import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Username', 'UserId', 'mobilenumber','email','ActiveSession','action'];

  dataSource = new MatTableDataSource<any>(); 
 

  @ViewChild(MatPaginator) paginator!: MatPaginator; 

  constructor(private authService: AuthService, private router:Router) {}

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
        {
          key: 'activeCode',
          operator: 'eq',
          value: 'ACTIVE'
        }
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
    alert('User deleted successfully');
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



