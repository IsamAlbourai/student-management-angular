import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students implements OnInit {

  students: Student[] = [];

  searchText = "";

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });

    const course = this.route.snapshot.queryParamMap.get('course');

    if (course) {
      this.searchText = course;
    }
  }

  get filteredStudents(): Student[] {
    return this.students.filter(student =>
      student.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      student.course.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  deleteStudent(id: number | string) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.students = this.students.filter(student => student.id !== id);
    });
  }

}
