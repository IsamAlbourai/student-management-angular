import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    {
      id: 1,
      name: "Sam",
      age: 22,
      course: "Information Technology"
    },
    {
      id: 2,
      name: "John",
      age: 20,
      course: "Computer Science"
    },
    {
      id: 3,
      name: "Sarah",
      age: 21,
      course: "Cyber Security"
    },
    {
      id: 4,
      name: "Michael",
      age: 23,
      course: "Software Engineering"
    }
  ];

}
