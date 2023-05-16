import { Component, OnInit } from '@angular/core';
import { IStudent } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss'],
  providers: [StudentService],
})
export class StudentDataComponent implements OnInit {
  public title: string = 'Angular Pipes';
  public heading: string = 'Students Data';
  public students!: IStudent[];
  public totalMarks!: number;
  constructor(private studentService: StudentService) {}
  ngOnInit(): void {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }
}
