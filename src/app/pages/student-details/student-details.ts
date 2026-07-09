import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css'
})
export class StudentDetails implements OnInit {

  student?: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.studentService.getStudentById(id).subscribe(data => {
      this.student = data;
    });
  }

}
