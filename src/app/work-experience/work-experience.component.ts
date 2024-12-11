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
      role: 'Intern',
      company: 'CodSoft',
      duration: 'Sep 2023 -  oct 2023',
      description: [
        'Learned Java Programing.',
        'Working On task given online .',
      ],
    },
    {
      role: 'Intern',
      company: 'grow intern',
      duration: 'Sep 2023 - oct 2023',
      description: [
        'Involved in Full Stack Web Devlopment',
        'devloping online projects',
      ],
    },
    {
      role: 'Intern',
      company: 'Oasis Infobyte',
      duration: 'Jan 2023 ',
      description: [
        'worked on java devlopment project',
        'solved  given task',
      ],
    },
   
  ];
  constructor() {}

  ngOnInit(): void {}
}
