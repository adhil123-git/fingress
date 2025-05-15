import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chart: any;
  dataSource: any[] = [];

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.fetchCustomers();
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
        this.dataSource = res.partiesList;
        this.createChart();
      },
     error: (err: any) => {
        console.error(err);
      }
    });
  }



  createChart() {

    const activeusers = this.dataSource.filter(customer => customer.ACTIVE_CODE === 'ACTIVE').length;
    const inactiveusers = this.dataSource.filter(customer => customer.ACTIVE_CODE !== 'ACTIVE').length;
    this.chart = new Chart("MyChart", {
      type: 'pie',

      data: {

        labels: ['Active', 'Inactive'],
        datasets: [{

          data: [activeusers, inactiveusers],
          backgroundColor: [
            '#4394E5',
            '#87BB62',

          ],
          borderColor: [
            'black',
            'black',


          ],
          borderWidth: 1,
          hoverOffset: 5
        }]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: { display:true, text: 'Total no users active or inactive', font: { size: 20, weight: 'bold' } },
        },
        animation: {  
          duration:1500
        }
        
      }

    });
  }

}

