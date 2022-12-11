import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public showPassword!: boolean;
  public showPasswordOnPress!: boolean;
  constructor(private route: ActivatedRoute, private _router: Router) { }

  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
  }

  mail: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
      this.password = params['password'];
    });
    this.mail = localStorage.getItem('emailid')
  }
  email = '';
  password = '';
  



  generatedPassword = '';
  erroremail = '';
  errorpassword = '';

  adminCred = {
    id: 'admin123',
    password: 'Admin321',
  };

  isEmailValid = true;
  isPasswordValid = true;

  getUseridValue(event: any) {
    this.email = event.target.value;
    var pattern = /^[a-zA-Z]+[0-9]+$/;  //aplhanumeric allowed

    if (this.email.length < 1) {
      this.erroremail = 'This field is required ';
    } else if (!pattern.test(this.email)) {
      this.erroremail = 'ID should be like abc123 ';
    } else {
      this.erroremail = '';
      this.generatedPassword = this.reverseString(this.email);
    }
  }
  getPasswordValue(event: any) {
    this.password = event.target.value;
    var pattern = /^[0-9]+[a-zA-Z]+$/;  //numericalpha allowed

    if (this.password.length < 1) {
      this.errorpassword = 'This field is required ';
    } else if (!pattern.test(this.password)) {
      this.errorpassword = 'Password should contain number,alphabets *';
    } else {
      this.errorpassword = '';
    }
  }

  login() {
    if (this.isEmailValid && this.isPasswordValid) {
      // if (
      //     this.email == this.adminCred.id &&
      //     this.password == this.adminCred.password
      //   ) {
      //     this._router.navigateByUrl('/admin');
      //     alert('Admin logged in succesfully !');
      //   } 

      // else if (this.email == this.mail) {
      //   alert('You are loged in.');
      //   this._router.navigate(['/form']);
      // } else {
      //   alert('ERROR.');
      // }
      if (
        this.email == this.adminCred.id &&
        this.password == this.adminCred.password
      ) {
        this._router.navigateByUrl('/admin');
        alert('you are Admin');
      } else if (this.generatedPassword == this.password) {
        this._router.navigateByUrl('/form');

        alert('you are User');
      } else {
        alert("You don't have an Account");
      }
    }

    localStorage.setItem('emailid', this.email);
    // console.log(this.email, this.password)

  }
  //Reverse function 

  reverseString(str: string) {
    let result = '';
    let i = str.length - 1;

    while (i >= 0) {
      result += str[i];
      i--;
    }
    return result;
  }

}
