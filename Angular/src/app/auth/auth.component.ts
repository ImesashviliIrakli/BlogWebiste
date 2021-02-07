import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { User } from '../_models/user.model';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],

})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  val:any={};
  constructor(
    private service: SharedService,
    private router:Router
    ) { }

  ngOnInit(): void {

  }

 

  //switch mode
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  //end of switch mode

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }

    this.isLoading = true;

    console.log(this.isLoading);
    
    if (this.isLoginMode) {
      //if isLoginMode==true 
      this.service.login(this.val).subscribe(
        resData => {
          this.isLoading = false;
          console.log(resData);
          this.router.navigate(["/"]);
        },
        error => {
          console.log(error);
        }
      );
      //if isLoginMode == true
    } else {
      //else
       this.service.register(this.val).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
          this.onSwitchMode();
        },
        errorRes => {
          console.log(errorRes);
        }
      );
      //else  
    }
  form.reset();
  }

}
