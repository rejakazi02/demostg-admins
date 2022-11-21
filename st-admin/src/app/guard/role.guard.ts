import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild  {
  constructor(private authService: AuthService, private rout: Router){}
  
  canActivate() {
    if(this.authService.isRole()){
     
      return true;
      
    }
    else{


      this.rout.navigate(['/auth/login']);
      return false;
    }
  
}



canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  let url = window.location.pathname;

  if((url == '/admin') && this.authService.isRole()){
    return true;
  }
  else if((url == '/routine/routineList') && this.authService.isRole()){
    return true;
  }
  // else if((url == '/Login') && this.authService.isRole()){
  //   return true;
  // }
  else{
    this.rout.navigate(['/auth/login']);
    return false;
  }
}
}
