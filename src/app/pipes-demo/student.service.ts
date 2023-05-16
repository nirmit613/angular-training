import { Injectable } from '@angular/core';
import { IStudent } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}
  public students: IStudent[] = [
    {
      name: 'Nirmit',
      course: 'Angular',
      marks: 580,
      DOB: new Date('09-06-2000'),
      fees: 3000,
      gender: 'Male',
    },
    {
      name: 'Utsav',
      course: 'Django',
      marks: 500,
      DOB: new Date('10-06-2001'),
      fees: 2500,
      gender: 'Male',
    },
    {
      name: 'Neha',
      course: 'ReactJs',
      marks: 550,
      DOB: new Date('07-31-2001'),
      fees: 2800,
      gender: 'Female',
    },
    {
      name: 'Jayesh',
      course: 'ROR',
      marks: 450,
      DOB: new Date('05-23-2000'),
      fees: 2200,
      gender: 'Male',
    },
    {
      name: 'Shivani',
      course: 'JavaScript',
      marks: 400,
      DOB: new Date('08-10-2001'),
      fees: 3000,
      gender: 'Female',
    },
    {
      name: 'Rohil',
      course: 'NodeJs',
      marks: 530,
      DOB: new Date('10-12-2001'),
      fees: 3000,
      gender: 'Male',
    },
  ];
  totalMarks: number = 600;
}
