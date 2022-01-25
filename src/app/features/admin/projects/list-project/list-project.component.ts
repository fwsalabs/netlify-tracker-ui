import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../projects.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
  selector: 'app-list-project',
  templateUrl: `./list-project.component.html`,
})
export class ListProjectComponent implements OnInit {

  projectList!: Observable<any>;

  constructor(
    private projectService: ProjectsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.projectList = this.projectService.getAllProjects();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      width: '40%',
      panelClass: ["animate__animated", "animate__slideInDown"]
    });

    dialogRef.afterClosed().subscribe((result: { message: string }) => {
      console.log('The dialog was closed');
      if (result && result.message === "success")
        this.projectList = this.projectService.getAllProjects();
    });
  }


}
