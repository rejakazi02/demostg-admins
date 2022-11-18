import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit  {

  responceData:any;
  logInForm:any;

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, private authService: AuthService,
    private route: Router,) {
    super();
  }

  ngOnInit(): void {
    this.userDataList();
    
  
  }

  userDataList() {
    this.authService.userDataList().subscribe((result) => {
      this.responceData = result;
      // console.log('user dataresponceData',this.responceData);
      // this.classtList()
    });
    
  }

  profile(){
    
      this.authService
        .anyUserLogin(this.logInForm.value)
        .subscribe((result) => {
          if (result != null) {
            this.responceData = result;

            localStorage.setItem('token',this.responceData.access_token);
            
            // console.log('login token',this.responceData.access_token);
            if(this.responceData?.userData?.role==='admin'){
              this.route.navigate(['/', 'admin-profile']);
              // this.toastr.success(result.message);
              console.log('user Id:',this.responceData?.userData?.role)
            }
            if(this.responceData?.userData?.role==='student'){
              this.route.navigate(['/', 'student-profile']);
              // this.toastr.success(result.message);
              console.log('user Id:',this.responceData?.userData?.role)
            }
            if(this.responceData?.userData?.role==='staff'){
              this.route.navigate(['/', 'teacher-profile']);
              // this.toastr.success(result.message);
              console.log('user Id:',this.responceData?.userData?.role)
            }
           
          }
        });
    

  }

  get userRole(){
    if(this.responceData?.user?.role === 'admin'){
      return 'Admin'
    }
     else if(this.responceData?.user?.role === 'student'){
      return 'Student'
     }
     else if(this.responceData?.user?.role === 'teacher'){
      return 'Teacher'
     }
     else{
      return ''
     }
  }


  logout(): void {
    this.authService.logOut();
  }

}
