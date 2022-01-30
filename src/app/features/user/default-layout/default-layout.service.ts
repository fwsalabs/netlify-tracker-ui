import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultLayoutService {

  private _showSidebar = new BehaviorSubject<boolean>(false);
  public showSidebar = this._showSidebar.asObservable();

  public toggleSidebar() {
    this._showSidebar.next(!this._showSidebar.value);
  }

}
