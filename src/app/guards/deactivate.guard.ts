import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  // tslint:disable-next-line:typedef
  canDeactivate(component: CanComponentDeactivate){
    return component.canDeactivate && component.canDeactivate();
  }

}

