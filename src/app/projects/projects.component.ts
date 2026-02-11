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
      title: 'akManager',
      technologies: 'Angular ,Angular Material',
      description: [
        'akmanager - The Fastest JS Package Manager Installs packages 10x faster using prebuilt cache and Bun for instant setups. ',
        'akmanager speeds up package installations by:
1️⃣ Using Bun as the backend - Faster than npm & yarn
2️⃣ Preloading Popular Packages - Avoids network downloads
3️⃣ Parallel Processing - Installs multiple packages simultaneously
4️⃣ Smart Caching - Installs from a local store instead of fetching from the internet
5️⃣ Compressed Prebuilt Package Cache - Extracts prebuilt dependencies for instant setup',
        
      ],
      link:'https://akmanager-site.vercel.app/'
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
      title: 'Akomponent-lib',
      technologies: 'C, C++',
      description: [
        'AKomponents Library is a lightweight, customizable React UI library with modern, responsive components. ',
        'Designed for performance and ease of use, it includes buttons, cards, forms, navigation, and more',
        '✅ Prebuilt, Reusable UI Components 🎨
✅ Fully Customizable & Responsive 📱
✅ Optimized for Performance & Accessibility ⚡
✅ Works Seamlessly with React & Tailwind CSS 🔥
✅ Minimal Dependencies for Faster Load Times 🏎️',
      ],
      link:'https://akomponent-site.vercel.app/'
    },
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
  ];
  constructor() {}

  ngOnInit(): void {}
}
