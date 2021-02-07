import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  val: any = {};
  username =  JSON.parse(localStorage.getItem('user') || '{}');
  @ViewChild('myInput') myInput = this.username.userId
  

  constructor(
    private service: SharedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //the input userId = localstorage userId
    this.val.userId = this.username.userId
    this.setCurrentUser();

  }

  //set current user
  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user')|| '{}');
    this.service.setCurrentUser(user);
    
  }
  //end of set current user

  //add blog
  addBlog(){
    this.service.addBlog(this.val).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/blog']);
    }, error => {
      console.log(error);
      
    })
  }
  //end of add blog

}
