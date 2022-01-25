import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface NavRoute {
  name: string,
  path: string,
  icon: string,
  isActive: boolean
}

const navItemsList: NavRoute[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: "home",
    isActive: false
  }, {
    name: "Github",
    path: "projects",
    icon: "users",
    isActive: true
  }, {
    name: "Netlify",
    path: "sites",
    icon: "folder",
    isActive: false
  }
  // , {
  //   name: "Calender",
  //   path: "/",
  //   icon: "calendar",
  //   isActive: false
  // }, {
  //   name: "Documents",
  //   path: "/",
  //   icon: "inbox",
  //   isActive: false
  // }, {
  //   name: "Report",
  //   path: "/",
  //   icon: "bar-chart",
  //   isActive: false
  // }
]

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _navList = new BehaviorSubject<NavRoute[]>([]);
  public navList = this._navList.asObservable();

  private _srcWidth = new BehaviorSubject<number>(640);
  private _srcHeight = new BehaviorSubject<number>(0);

  public srcHeight = this._srcHeight.asObservable();
  public srcWidth = this._srcWidth.asObservable();

  constructor(
  ) {
    this._navList.next(navItemsList);
    this.onWindowResize();
  }


  public updateSrcWidth(value: number) {
    this._srcWidth.next(value);
  }

  public updateSrcHeight(value: number) {
    this._srcHeight.next(value);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    const height = window.innerHeight;
    this.updateSrcHeight(height);
    const width = window.innerWidth;
    this.updateSrcWidth(width);
  }


}
