import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public customerchart: any;
  public userchart: any;
  public nameCountChart:any;
  customerData: any[] = [];
  userData: any[] = [];

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.fetchCustomers();
    this.fetchUsers();
  }
   fetchCustomers(): void {
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

    this.authService.fetchtablecustomer(tabledata).subscribe({
      next: (res: any) => {
        this.customerData= res.partiesList;
        this.createChart();
        this.createNameCountChart();
      },
     error: (err: any) => {
        console.error(err);
      }
    });
  }



  createChart() {

    const activcustomer = this.customerData.filter(customer => customer.ACTIVE_CODE === 'ACTIVE').length;
    const inactivecustomer = this.customerData.filter(customer => customer.ACTIVE_CODE === 'IN_ACTIVE').length;
   
    this.customerchart = new Chart("customerChart", {
      type: 'pie',

      data: {

        labels: ['Active', 'Inactive'],
        datasets: [{

          data: [activcustomer, inactivecustomer],
          backgroundColor: [
            '#4394E5',
            '#87BB62',

          ],
          borderWidth: 1,
          hoverOffset: 5
        }]
      },
      options: {
        plugins: {
          title: { display:true, text: 'Total no customer active or inactive', font: { size: 20, weight: 'bold' } },
          legend:{
            position:'top',
          }
        },
        animation: {  
          duration:1500
        }
        
      }
    });
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
        this. userData = res.usersList;
        this.createuserChart();
      },
     error: (err: any) => {
        console.error(err);
      }
    });
  }



  createuserChart() {

    const activeuser = this.userData.filter(user=> user.ACTIVE_CODE === 'ACTIVE').length;
    const inactiveuser = this. userData.filter(user => user.ACTIVE_CODE === 'IN_ACTIVE').length;
   

    this.userchart = new Chart("userChart", {
      type: 'pie',

      data: {

        labels: ['Active', 'Inactive'],
        datasets: [{

          data: [activeuser, inactiveuser],
          backgroundColor: [
            '#4394E5',
            '#87BB62',

          ],
          borderWidth: 1,
          hoverOffset: 5
        }]
      },
      options: {
        plugins: {
          title: { display:true, text:'Total no Users active or inactive', font: { size: 20, weight: 'bold' } },
          legend:{
            position:'top',
          }
        },
        animation: {  
          duration:1500
        }
        
      }

    });
  }
getcustomer(): { [name: string]: number } {
  const counts: { [name: string]: number } = {};
  this.customerData.forEach((customer: any) => {
    const name = customer.PARTY_NAME;
    counts[name] = (counts[name] || 0) + 1;
  });
  return counts;
}

createNameCountChart() {
  const Count = this.getcustomer();
  const label = Object.keys(Count); 
  const data = Object.values(Count);

  this.nameCountChart = new Chart("nameCountChart", {
    type: 'pie',
    data: {
      labels: label,
      datasets: [{
        data: data,
        backgroundColor: [
          '#FF6384','#FF9F40','#FFCD56','#4BC0C0','#36A2EB','#9966FF','#FF6384','#FF6384','#FF9F40','#FFCD56',
        ],
        borderWidth: 1,
        hoverOffset: 5
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: 'Customer name count', font: { size: 20, weight: 'bold' } },
        legend: { position: 'top' }
      },
      animation: { duration: 1500 }
    }
  });
}
}

