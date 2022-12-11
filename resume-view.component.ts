import { Component, OnInit } from '@angular/core';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss'],
})
export class ResumeViewComponent implements OnInit {
  // item: [] = [];
  resumeData: any;
  Object = Object;
  qualificationData: any;
  experienceData: any;
  // objFra: any;

  constructor(public _viewService: ViewService) { }

  ngOnInit(): void {
    this.resumeData = this._viewService.data3[0].mod1;
    // this.resumeData=JSON.stringify(this._viewService.data3[0]);

    this.qualificationData = this.resumeData.qualification;
    this.experienceData = this.resumeData.experience;
    // console.log(this._viewService.item[0]._qualification)
    // console.log(JSON.stringify(this.experienceData));
    // console.log(this.resumeData)
  }
 
  // change(){
  //   console.log(this.resumeData)

  // }

}
