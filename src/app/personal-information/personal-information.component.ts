import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Aditya Katare'],
    ['DOB', '20/01/2002'],
    ['Work Exp', 'Fresher'],
    ['Education', 'Bcs(2023)'],
    ['Interests', 'Problem-solving'],
  ];

  aboutMe: string[] = [
    "Hi, I'm a first-year MCA student at K. K. Wagh Institute of Engineering Education.",
    'My interests lie in solving Data Structures and Algorithms (DSA) problems, Web Development.',
    "I'm proficient in coding using Java and I have worked with frontend frameworks like Angular and React.",
     "I also have hands-on experience working with Node.js, Express, and MongoDB for backend development.",
  ];

  constructor() {}

  ngOnInit(): void {}
}
