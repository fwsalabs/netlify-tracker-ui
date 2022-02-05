import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ProjectsService } from 'src/app/features/admin/projects/projects.service';
import { UserProjectsService } from '../user-projects.service';

@Component({
  selector: 'app-create-user-project',
  templateUrl: './create-user-project.component.html',
  styles: []
})
export class CreateUserProjectComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateUserProjectComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private projectService: UserProjectsService,
  ) { }

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  onNoClick(): void {
    this.dialogRef.close({ message: "closed" });
  }

  buildForm() {
    return this.formBuilder.group({
      name: new FormControl("", Validators.required),
      description: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z -]+$')])
    })
  }


  submitForm() {
    const { invalid, value } = this.form;

    console.log(value);

    if (invalid) {
      this.toastr.error("Invalid Form Input");
      return;
    }

    const createdBy = this.authService.loggedInUser;
    // const projectObj = Object.assign(value, { createdBy })

    this.projectService.createProjectRequest(value)
      .subscribe((res: any) => {
        console.log(res);
        this.dialogRef.close({ message: "success" })
      })
  }

}
