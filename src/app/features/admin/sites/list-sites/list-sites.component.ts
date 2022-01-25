import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SitesService } from '../sites.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateSitesComponent } from '../create-sites/create-sites.component';


@Component({
  selector: 'app-list-sites',
  templateUrl: './list-sites.component.html',
  styles: [
  ]
})
export class ListSitesComponent implements OnInit {

  sitesList!: Observable<any>;

  constructor(
    private sitesService: SitesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.sitesList = this.sitesService.getAllSites();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateSitesComponent, {
      width: '40%',
      panelClass: ["animate__animated", "animate__slideInDown"]
    });

    dialogRef.afterClosed().subscribe((result: { message: string }) => {
      console.log('The dialog was closed');
      if (result && result.message === "success")
        this.sitesList = this.sitesService.getAllSites();
    });
  }

}
