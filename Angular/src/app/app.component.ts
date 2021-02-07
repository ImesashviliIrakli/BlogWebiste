import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { User } from './_models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  title = 'Angular';
  
  constructor(private service: SharedService) {
    
  }

  ngOnInit(){
    this.setCurrentUser();
  }
  //set current user
  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user')|| '{}');
    this.service.setCurrentUser(user);
    
  }
  //end of set current user
}

