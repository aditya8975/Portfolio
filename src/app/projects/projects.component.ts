import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'e-commerce',
      technologies: ' Angular, Angular Material',
      description: [
        'Worked to build an e-commerce application using angular ',
        'Got to learn about Angular Material and Services',
        'Learned Typescript to build an webapp.',
      ],
      link:'https://adityaaecommerce.netlify.app/'
    },
    {
      title: 'Portfolio',
      technologies: 'Angular ,Angular Material',
      description: [
        'Worked to build an Portfolio using angular ',
        'Got to learn about Angular Material',
        'Learned Typescript to build an Portfolio.',
      ],
      link:'https://adityakatareport.netlify.app/'
    },

 
    {
      title: 'Chess',
      technologies: 'Backend: Node.js, Express, Socket.io Frontend: HTML, CSS (Tailwind), JavaScript Chess Logic: Chess.js',
      description: [
        'Worked on Socket Programing to create chess game ',
        'Learned Socket Programing and React',
        
      ],
      link:'https://github.com/aditya8975/ChessGame'
    },
    {
      title: 'SpaceWeb',
      technologies: 'Angular',
      description: [
        'Worked on Space WebApp to serve info about space and space releated stuff',
        'Learned Frontend Devlopment & responsive web.',
        
      ],
      link:'https://github.com/aditya8975/2thespace'
    },
    
    {
      title: 'Shell',
      technologies: 'C, C++',
      description: [
        'Worked to build Shell ',
        'Got to learn about kernel and Shell Scripting',
        'Learned C, C++ to build an Shell.',
      ],
      link:'https://github.com/aditya8975/proj/tree/main'
    },
    {
      title: '4K Hospital',
      technologies: 'HTML, CSS, JS',
      description: [
        'Worked on Hospital Manegment Website ',
        'Learned Frontend Devlopment & local Storage.',
        
      ],
      link:'https://github.com/aditya8975/HospitalMSystem'
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
