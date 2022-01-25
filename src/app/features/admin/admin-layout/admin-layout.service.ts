import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLayoutService {

  private _showSidebar = new BehaviorSubject<boolean>(false);
  public showSidebar = this._showSidebar.asObservable();

  public toggleSidebar() {
    this._showSidebar.next(!this._showSidebar.value);
    console.log("updated sidebar status", this._showSidebar.value)
  }

}
