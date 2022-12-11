import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  // item: [] = [];
  data4: any = [];
  resumeData: any;

  constructor(public _dashboard: DashboardService) { }

  ngOnInit(): void {
    this.sortName();
    this.resumeData = this._dashboard.data4;
  }
  sortName() {
    this._dashboard.data4 = this._dashboard.data4.sort((a: any, b: any) =>
      a.first.localeCompare(b.first)
    );
    // console.log(this._dashboard.data4);
  }
}
