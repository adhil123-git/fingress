import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'UserId', 'Partycode', 'PartyName','Status','updatedOn'];
usersList: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchUsers();
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
        pageSize: 20,
        pageIndex: 0
      },
      sorting: {
        key: 'createdOn',
        value: 'asc'
      }
    };

    this.authService.fetchtable(tabledata).subscribe({
      next: (res: any) => {
        this.usersList = res.usersList;
      },
      error: (err: any) => {
        console.error('Error fetching users:', err);
        alert('An error occurred while fetching users.');
      }
    });
  }
}
