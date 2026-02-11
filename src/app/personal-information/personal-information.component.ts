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
    ['Education', 'MCA(2025)'],
    ['Interests', 'Problem-solving'],
  ];

  aboutMe: string[] = [
    'MCA graduate specializing in Full Stack Development with expertise in React.js, Next.js, and Node.js.',
    'Experienced in building scalable web and mobile applications, integrating REST APIs, and optimizing performance-driven systems.',
  'Strong foundation in database design and modern development workflows.',
    'My interests lie in solving Data Structures and Algorithms (DSA) problems',

  ];

  constructor() {}

  ngOnInit(): void {}
}
