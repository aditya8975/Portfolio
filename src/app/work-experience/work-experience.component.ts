import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'React.js & ReactNative Intern',
      company: 'Samarth IT',
      duration: 'Jan 2025 - jun 2025',
      description: [
'Developed web and mobile application features using React.js and React Native.',
'Integrated REST APIs and implemented authentication flows.',
'Built reusable components and optimized UI performance.',
'Collaborated in debugging, testing, and deployment processes.',

      ],
    },
   
   
  ];
  constructor() {}

  ngOnInit(): void {}
}
