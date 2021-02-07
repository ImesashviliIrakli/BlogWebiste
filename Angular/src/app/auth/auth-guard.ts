import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { SharedService } from "../shared.service";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";

@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate{

    constructor(
        private authService:SharedService,
        private router:Router
    ){}

    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ):boolean | Promise<boolean>| Observable<boolean | UrlTree>{
        
        return this.authService.currentUserSource.pipe(
            take(1),
            map(user => {
                const isAuth = !!user;
                if(isAuth){
                    return true;
                }
                return this.router.createUrlTree(['/auth']);
            })
        );
    }
}