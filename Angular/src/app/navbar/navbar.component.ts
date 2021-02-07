import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
   isLoggedIn=false;
   public userSub!: Subscription ;
   username =  JSON.parse(localStorage.getItem('user') || '{}');


  constructor(private service: SharedService, 
    private router: Router) { }


  ngOnInit(): void {
    this.currentUser();
    this.isLoggedIn =false;

  }

  //cureent
  currentUser(){
    this.userSub = this.service.currentUser$.subscribe(user => {
      if(user){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }

    }, error => {
      console.log(error);
      
    }) 
  }
  //current


  //logout
  logout(){
    
    this.service.logout();
    this.router.navigate(['/auth']);
    this.isLoggedIn = false;
  }
  //end of logout

  //destroy
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  //end of destroy


  
}
