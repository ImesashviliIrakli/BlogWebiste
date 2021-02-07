import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.setCurrentUser();
  }

    //set current user
    setCurrentUser(){
      const user: User = JSON.parse(localStorage.getItem('user')|| '{}');
      this.service.setCurrentUser(user);

           
    }
    //end of set current user

}
