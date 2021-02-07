import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.scss'],

})
export class ShowBlogComponent implements OnInit {
  blogPost: any =[];
  blog:any;
  LoggedIn = true;
  isLoading = false;
  username =  JSON.parse(localStorage.getItem('user') || '{}');

  constructor(
    private service:SharedService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getBlog();
    this.setCurrentUser();
  }

  //set current user
  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user')|| '{}');
    this.service.setCurrentUser(user);
    
  }
  //end of set current user

  //go to add blog
  addClick(){
    this.isLoading = true;
    this.router.navigate(['/blog/add']);
    this.isLoading = false;
  }
  //end of go to add blog

  //get blog
  getBlog(){
    this.service.getBlog().subscribe(data => {
      this.blogPost = data;   
      console.log(this.blogPost);
         
    }, error => {
      console.log(error);
      
    });
  }
  //end of get blog

  //delete blog
  deleteBlog(id : number){
    this.service.deleteBlog(id).subscribe(data =>{
      this.getBlog();
    }, error =>{
      console.log(error);
      
    })
  }
  //end of delete blog

}
