import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SessionDialogComponent } from '../session-dialog/session-dialog.component';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['PartyName','Partycode','Mobilenumber', 'emailaddress','Status','action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchCustomers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  fetchCustomers(): void {
    const tabledata = {
      entityTypeCode: 'API_GW_PARTY',
      filters: [],
      pagination: {
        pageSize: 1000,
        pageIndex: 0
      },
      sorting: {
        key: 'createdOn',
        value: 'asc'
      }
    };

    this.authService.fetchtablecustomer(tabledata).subscribe({
      next: (res: any) => {
        this.dataSource.data = res.partiesList;
      },
      error: (err: any) => {
        console.error(err);
        alert('Error during fetching the customer list');
      }
    });
  }

  deleterow(row: any): void {
    const currentdata = this.dataSource.data;
    this.dataSource.data = currentdata.filter(customer => customer !== row);
    alert('Customer deleted successfully');
  }

  navigateToModify(customer: any): void {
    this.router.navigate(['/landingpage/modifycustomer'], {
      queryParams: {
        partyName: customer.PARTY_NAME,
        partyCode: customer.PARTY_CODE,
        partyEmailaddress: customer.EMAIL_ADDRESS,
        partyMobilenumber: customer.MOBILE_NUMBER,
      }
    });
  }

  openSessionDialog(customer: any): void {
    const dialogRef = this.dialog.open(SessionDialogComponent, {
      data: { partycode:customer.PARTY_CODE, partyname:customer.PARTY_NAME,status:customer.ACTIVE_CODE }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.fetchCustomers(); 
    });
  }
}