import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styles: [
  ]
})
export class DetailProjectComponent implements OnInit {

  projectDetail!: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params["id"];
      console.log(id);
      if (id) {
        this.projectDetail = this.projectService.getProject(id);
      }
    })

  }

}
