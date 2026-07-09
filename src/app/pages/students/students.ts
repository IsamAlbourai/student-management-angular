import { Component, OnInit, signal } from '@angular/core';
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

  students = signal<Student[]>([]);

  searchText = "";

  isLoading = signal(false);

  errorMessage = signal("");

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const course = this.route.snapshot.queryParamMap.get('course');

    if (course) {
      this.searchText = course;
    }

    this.loadStudents();
  }

  loadStudents() {
    this.isLoading.set(true);
    this.errorMessage.set("");

    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set("Failed to load students. Please check if the API is running.");
        this.isLoading.set(false);
      }
    });
  }

  getFilteredStudents(): Student[] {
    return this.students().filter(student =>
      student.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      student.course.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  deleteStudent(id: number | string) {
    this.studentService.deleteStudent(id).subscribe({
      next: () => {
        this.loadStudents();
      },
      error: () => {
        this.errorMessage.set("Failed to delete student.");
      }
    });
  }

}
