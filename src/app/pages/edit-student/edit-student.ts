import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-edit-student',
  imports: [FormsModule],
  templateUrl: './edit-student.html',
  styleUrl: './edit-student.css'
})
export class EditStudent implements OnInit {

  student: Student = {
    id: 0,
    name: "",
    age: 18,
    course: ""
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const foundStudent = this.studentService.getStudentById(id);

    if (foundStudent) {
      this.student = { ...foundStudent };
    }
  }

  updateStudent() {
    this.studentService.updateStudent(this.student);

    this.router.navigate(['/students']);
  }

}
