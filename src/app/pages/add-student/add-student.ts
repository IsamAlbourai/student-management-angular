import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent {

  studentName = "";

  studentAge = 18;

  studentCourse = "";

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {

  }

  saveStudent() {
    const newStudent: Student = {
      id: 0,
      name: this.studentName,
      age: this.studentAge,
      course: this.studentCourse
    };

    this.studentService.addStudent(newStudent);

    this.router.navigate(['/students']);
  }

}
