import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormArray
} from '@angular/forms';
import { Router } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { nameValidator } from '../../validators/name.validator';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

  studentForm;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), nameValidator]],
      age: [18, [Validators.required, Validators.min(18)]],
      course: ['', Validators.required],
      skills: this.formBuilder.array([])
    });
  }

  get skills(): FormArray {
    return this.studentForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.formBuilder.control('', Validators.required));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  saveStudent() {
    const formValue = this.studentForm.value;

    const skills = (formValue.skills || []) as string[];

    const newStudent: Student = {
      id: 0,
      name: formValue.name || "",
      age: Number(formValue.age),
      course: formValue.course || "",
      skills: skills
    };

    this.studentService.addStudent(newStudent).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }

}
