import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { AuthService } from './../../service/auth.service';
// import value from './../../../declarations.d';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  responceData: any;
  logInForm!: FormGroup;
  errorMessage: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.logInForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  logIn() {
    // console.log(this.logInForm.value);
    // if (this.logInForm.valid) {
    //   this.authService
    //     .proceedLogin(this.logInForm.value)
    //     .subscribe((result) => {
    //       if (result != null) {
    //         this.responceData = result;

    //         localStorage.setItem('token',this.responceData.access_token);

    //         this.route.navigate(['/', 'dashboard']);
    //         console.log('login token',this.responceData.access_token);
    //         alert('Login Successfull');
    //       }
    //     });

    // }

    if (this.logInForm.valid) {
      this.authService.anyUserLogin(this.logInForm.value).subscribe(
        (result) => {
          if (result != null) {
            this.responceData = result;

            localStorage.setItem('token', this.responceData.access_token);

            // console.log('login token',this.responceData.access_token);
            if (this.responceData?.role === 'admin') {
              this.route.navigate(['/', 'admin']);
              this.toastr.success(result.message);
              console.log('user Id:', this.responceData?.role);
            }
            if (this.responceData?.role === 'student') {
              this.route.navigate(['/', 'student']);
              this.toastr.success(result.message);
              console.log('user Id:', this.responceData?.role);
            }
            if (this.responceData?.role === 'staff') {
              this.route.navigate(['/', 'teacher-dashboard']);
              this.toastr.success(result.message);
              console.log('user Id:', this.responceData?.role);
            }
          }
        },
        (err) => {
          this.errorMessage = err.error.errors;
          if (err.error.errors.email) {
            this.toastr.error(err.error.errors.email);
          }
          if (err.error.errors.password) {
            this.toastr.error(err.error.errors.password);
          }

          // alert(err.error.message)
        }
      );
    }
  }

  logout(): void {
    this.authService.logOut();
  }
}
