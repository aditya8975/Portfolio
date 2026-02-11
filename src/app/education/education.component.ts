import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
 
    {
      institute: 'K.K.W.I.E.E.R(Nashik)',
      course: 'Master of Computer Applications',
      duration: '2023-2025',
      score: '81%',
    },
    {
      institute: 'K.T.H.M college(Nashik)',
      course: 'Bachlor of Computer Science',
      duration: '2020-2023',
      score: '81%',
    },
    {
      institute: 'Jr college',
      course: 'HSC',
      duration: '2019-2020',
      score: '67%',
    },
    {
      institute: 'Godavari Madhyamic Vidalaya School ',
      course: 'SSC',
      duration: '2017-2018',
      score: '85%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
