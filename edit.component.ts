import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { AppModule } from '../app.module';
import { DashboardService } from '../dashboard.service';
import { ExperienceService } from '../experience.service';
import { QualifyService } from '../qualify.service';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  fname: any = '';
  lname: any = '';
  dateValue: any = '';
  urlValue: any = '';
  info: any = '';

  errorFname: any = '';
  errorLname: any = '';
  errorDate: any = '';
  errorUrl: any = '';
  errorDegree: any = '';
  errorInstitute: any = '';
  errorYear: any = '';
  errorGrade: any = '';
  errorOrganization: any = '';
  errorRole: any = '';
  errorDuration: any = '';
  errorDuration2: any = '';
  infoFormatted: any = '';

  degree: any = '';
  institute: any = '';
  duration: any = '';
  grade: any = '';
  remarks: any = '';

  organization: any = '';
  role: any = '';
  duration2: any = '';
  remarks2: any = '';
  object: any = [];
  _object: any = [];

  date1: any;
  date2: any;
  Difference_In_Time: any;
  Difference_In_Days: any;
  Year: any;


  constructor(
    public expo: ExperienceService,
    public Qualify: QualifyService,
    public _viewService: ViewService,
    public _dashboard: DashboardService,
    public _router: Router
  ) { }


  ngOnChanges(): void { }
  ngOnInit(): void {
    this.date2 = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    this.sortName();
    // console.log('ala', localStorage.getItem('formdata'));
    // this._data1 = localStorage.getItem('formdata',);
    // this._data1 = JSON.parse(localStorage.getItem('formdata')!);
    // console.log(this._data1);
    // if (this._data1) {
    //   this.fname = this._data1.firstName;
    //   this.lname = this._data1.lastName;
    //   this.dateValue = this._data1.DOB;
    //   this.urlValue = this._data1.imageUrl;
    //   this.info = this._data1.aboutInfo;
    // }



  }

  _data1: any = []


  getFname(event: any) {
    this.fname = event.target.value;
    var pattern = /^[a-zA-Z]+$/;                //alphabets allowed
    if (this.fname.length < 1) {
      this.errorFname = 'This field is required ';
    } else if (!pattern.test(this.fname)) {
      this.errorFname = 'Name must only contain characters ';
    } else {
      this.errorFname = '';
    }
  }


  getLname(event: any) {
    this.lname = event.target.value;
    var pattern = /^[a-zA-Z]+$/;    //alphabets allowed
    if (this.lname.length < 1) {
      this.errorLname = 'This field is required ';
    } else if (!pattern.test(this.lname)) {
      this.errorLname = 'Name must only contain characters ';
    } else {
      this.errorLname = '';
    }
  }


  getDegree(event: any) {
    this.degree = event.target.value;
    var pattern = /^[a-zA-Z]+$/;                             //alphabets allowed
    if (this.degree.length < 1) {
      this.errorDegree = 'This field is required ';
    } else if (!pattern.test(this.degree)) {
      this.errorDegree = 'Degree must only contain alphabtes ';
    } else {
      this.errorDegree = '';
    }
  }


  getdateValue(event: any) {
    this.dateValue = event.target.value;
    this.date1 = new Date(this.dateValue);
    this.date2 = new Date();
    // this.date2 = "2022-11-02"
    this.Difference_In_Time = this.date2.getTime() - this.date1.getTime();
    this.Difference_In_Days = this.Difference_In_Time / (1000 * 3600 * 24);
    this.Year = this.Difference_In_Days / 365;

    if (this.dateValue.length < 1) {
      this.errorDate = 'This field is required';
      // this.isdateValueValid = false;
    } else if (this.Year <= 18) {
      this.errorDate = 'Age must be 18 or above';
      // this.isdateValueValid = false;
    } else {
      this.errorDate = '';
      // this.isdateValueValid = true;
    }
    // this.date2 = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  }


  getInstitute(event: any) {
    this.institute = event.target.value;
    var pattern = /^[ A-Za-z_@./#&+-]*$/;
    if (this.institute.length < 1) {
      this.errorInstitute = 'This field is required ';
    } else if (!pattern.test(this.institute)) {
      this.errorInstitute = 'field should be valid format ';  //numbers are not allowed
    } else {
      this.errorInstitute = '';
    }
  }


  // getGrade(event: any) {
  //   this.grade = event.target.value;
  //   var pattern = /^[A-C]+$/;
  //   if (this.grade.length < 1) {
  //     this.errorGrade = 'This field is required ';
  //   } else if (!pattern.test(this.grade)) {
  //     this.errorGrade = 'Grade should only A,B,C ';
  //   } else {
  //     this.errorGrade = '';
  //   }
  // }

  getYear(event: any) {
    this.duration = event.target.value;
    this.date1 = new Date(this.duration);
    this.date2 = new Date();
    if (this.duration.length < 1) {
      this.errorDuration = 'This field is required ';
    } else if (this.date1 > this.date2) {
      this.errorDuration = "Date is invalid";
    } else {
      this.errorDuration = '';
    }
  }

  getYear2(event: any) {
    this.duration2 = event.target.value;
    this.date1 = new Date(this.duration2);
    this.date2 = new Date();
    if (this.duration2.length < 1) {
      this.errorDuration2 = 'field is required ';
    } else if (this.date1 > this.date2) {
      this.errorDuration2 = "Date is invalid";
    } else {
      this.errorDuration2 = '';
    }
  }

  onSubmit() {
    const data = { firstName: this.fname, lastName: this.lname, DOB: this.dateValue, imageUrl: this.urlValue, aboutInfo: this.infoFormatted }
    localStorage.setItem("formdata", JSON.stringify(data));
    console.log(data);

  }

  onEdit() { }


  save(resumeForm: NgForm) {
    if (
      this.errorFname.length < 1 &&
      this.errorLname.length < 1 &&
      this.errorDate.length < 1 &&
      this.errorUrl.length < 1
    ) {

      // (this._viewService.data3[0].mod1.fname = this.fname),
      //   (this._viewService.data3[0].mod1.last = this.lname),
      //   (this._viewService.data3[0].mod1.birth = this.dateValue),
      //   (this._viewService.data3[0].mod1.url = this.urlValue),
      //   (this._viewService.data3[0].mod1._info = this.infoFormatted),
      //   (this._viewService.data3[0].qualification = this.Qualify.data1),
      //   (this._viewService.data3[0].experience = this.expo.data2);
      date: new Date(),
        // this.addAdmin();
      this.onSubmit();
      // this.myFunction();

      this._router.navigateByUrl('/view');
      alert('Form Submitted !!!');
      return true;
    } else {
      alert('Please fill required field');
      return false;
    }

  }


  getUrl(event: any) {
    this.urlValue = event.target.value;
    let pattern = /\.(jpg|jpeg|png|webp|avif|gif|svg|apng)$/;   //img url verified
    if (this.urlValue.length < 1) {
      this.errorUrl = 'This field is required ';
    } else if (!pattern.test(this.urlValue)) {
      this.errorUrl = 'Please provide Valid Url ';
    } else {
      this.errorUrl = '';
    }
  }

  getOrganization(event: any) {
    this.organization = event.target.value;
    let pattern = /^[a-zA-Z\s]*$/g;                    //space and alphabets allowed
    if (this.organization.length < 1) {
      this.errorOrganization = 'Field should not be empty *';
    } else if (!pattern.test(this.organization)) {
      this.errorOrganization = 'Field must be accurate *';
    } else {
      this.errorOrganization = '';
    }
  }

  getRole(event: any) {
    this.role = event.target.value;
    let pattern = /^[a-zA-Z ]*$/;
    if (this.role.length < 1) {
      this.errorRole = 'This field is required ';
    } else if (!pattern.test(this.role)) {
      this.errorRole = 'field should be correct';
    } else {
      this.errorRole = '';
    }
  }

  getinfo(event: any) {
    const arr: string[] = [...this.info]; //String converted into array
    var bCount = this.info.split('*').length - 1;
    var iCount = this.info.split('_').length - 1;
    var len = this.info.length;
    if (bCount % 2 != 0) bCount -= 1;
    if (iCount % 2 != 0) iCount -= 1;
    // console.log(bCount);
    // console.log(iCount);
    for (var i = 0; i <= len - 1; i++) {
      if (arr[i] == '*' && bCount > 0) {
        bCount % 2 == 0
          ? (this.infoFormatted += '<b>')
          : (this.infoFormatted += '</b>');
        bCount--;
        continue;
      }
      if (arr[i] == '_' && iCount > 0) {
        iCount % 2 == 0
          ? (this.infoFormatted += '<i>')
          : (this.infoFormatted += '</i>');
        iCount--;
        continue;
      }
      this.infoFormatted += arr[i];
    }
    // console.log(this.info);
    // console.log(this.infoFormatted);
  }

  addRow(
    Qdegree: any,
    Qinstitute: any,
    Qduration: any,
    Qgrade: any,
    Qremarks: any
  ) {
    var data = {
      id: this.Qualify.data1.length,
      degree: this.degree,
      institute: this.institute,
      duration: this.duration,
      grade: this.grade,
      remarks: this.remarks,
    };
    if (
      this.errorDegree.length < 1 &&
      this.errorInstitute.length < 1 &&
      this.errorDuration.length < 1 &&
      this.errorGrade.length < 1
    ) {
      this.Qualify.data1.push(data);
      alert('Details added succesfully');
      this.resetRow();
      return true;
    } else {
      alert('Please fill all required fields in valid format');
      return false;
    }
  }

  addItem(Eoragnization: any, Erole: any, Eduration: any, Eremarks: any) {
    var detail = {
      id: this.expo.data2.length,
      organization: this.organization,
      role: this.role,
      duration: this.duration2,
      remarks: this.remarks2,
    };
    if (
      this.errorOrganization.length < 1 &&
      this.errorRole.length < 1 &&
      this.errorDuration2.length < 1) {
      this.expo.data2.push(detail);
      alert('Details added succesfully');
      this.resetItem();
      return true;
    } else {
      alert('Please fill all required fields in valid format');
      return false;
    }
  }

  deleteRow(obj: any) {
    this.Qualify.data1 = this.Qualify.data1.filter(
      (_object) => _object !== obj
    );
  }


  deleteItem(obj: any) {
    this.expo.data2 = this.expo.data2.filter((object) => object !== obj);
  }

  resetRow() {
    this.degree = '';
    this.institute = '';
    this.duration = '';
    this.grade = '';
    this.remarks = '';
  }

  resetItem() {
    this.organization = '';
    this.role = '';
    this.duration2 = '';
    this.remarks2 = '';
  }

  sortName() {
    this._viewService.data3 = this._viewService.data3.sort((a: any, b: any) =>
      a.first.localeCompare(b.first)
    );
    this._viewService.data3 = this._viewService.data3.sort((a: any, b: any) =>
      a.last.localeCompare(b.last)
    );
  }

  addAdmin() {
    var admin = {
      first: this.fname,
      last: this.lname,
      dob: this.dateValue,
      date: new Date(),
      url: this.urlValue,
    };
    this._dashboard.data4.push(admin);
  }
  // myFunction() {
  //   var _fname = localStorage.getItem("formdata");
  //   // document.getElementById("demo").innerHTML = x;
  //   console.log(_fname)
  // }

}
