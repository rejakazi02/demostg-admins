import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
})
export class DefaultHeaderComponent extends HeaderComponent {

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

  logout(): void {
    this.authService.logOut();
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


}
