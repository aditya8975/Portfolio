import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Node.js',
      level: 'Intermidiate',
      rating: 70,
    },
    
    {
      name: 'React',
      level: 'Intermidiate',
      rating: 70,
    },
    {
  name: 'Next.js, TypeScript',
  level: 'Intermediate',
  rating: 70,
},
    {
      name: 'JAVA',
      level: 'Intermidiate',
      rating: 70,
    },
     {
      name: 'PHP',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'C',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'MongoDB',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'MySql/Oracle',
      level: 'Intermidiate',
      rating: 70,
    },
    {
  name: 'AI API Integration, Prompt Engineering',
  level: 'Intermediate',
  rating: 70,
},
    {
  name: 'Git, Docker, CI/CD',
  level: 'Beginner',
  rating: 60,
},
    {
  name: 'DSA, OOP, System Design',
  level: 'Intermediate',
  rating: 70,
},

  ];
  constructor() {}

  ngOnInit(): void {}
}
