import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CreateProjectComponent } from 'src/app/features/admin/projects/create-project/create-project.component';
import { ProjectsService } from 'src/app/features/admin/projects/projects.service';
import { CreateSitesComponent } from 'src/app/features/admin/sites/create-sites/create-sites.component';
import { SitesService } from 'src/app/features/admin/sites/sites.service';

@Component({
  selector: 'app-list-user-project',
  templateUrl: './list-user-project.component.html',
  styles: [
  ]
})
export class ListUserProjectComponent implements OnInit {

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
