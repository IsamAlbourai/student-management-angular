import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService) {

  }

  ngOnInit(): void {

    this.students = this.studentService.students;

  }

}
