import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComicGuardService  implements CanActivate{

  constructor(private _router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;

    if(isNaN(id) || id < 0){
      alert('Invalid Product Id');

      this._router.navigate(['/comic']);
      return false;
    }
    return true;
  }
}
