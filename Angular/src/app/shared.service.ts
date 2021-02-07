import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import { map} from 'rxjs/operators';
import { User } from './_models/user.model';




@Injectable({
  providedIn: 'root'
})
export class SharedService {
  ApiUrl = "http://localhost:5000/api";
  public currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http : HttpClient ) { }

  //register
  register(val : any){
    return this.http.post(this.ApiUrl + "/auth/register", val );
  }
  //end of register

  //login
  login(val : any){
    return this.http.post<User>(this.ApiUrl + "/auth/login", val).pipe(
      map((response : User) => {
        const user = response;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }
  //end of login
 

  //set current user
  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }
  //end of set current user


  //logout
  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next();
  }
  //end of logou

  //get blog
  getBlog():Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl + "/blogpost");
  }
  //end of get blog

  //add blog
  addBlog(val : any){
    return this.http.post(this.ApiUrl + "/blogpost", val);
  }
  //add blog

  //update blog
  updateBlog(val:any){
    return this.http.put(this.ApiUrl + "/blogpost", val);

  }
  //end of update blog

  //delete blog
  deleteBlog(val : number){
    return this.http.delete(this.ApiUrl + "/blogpost/"+val);
  }
  //end of delete blog
}
