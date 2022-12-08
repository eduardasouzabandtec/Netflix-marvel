import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  images = [
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
    { path: '../../../../assets/teste1.jpg' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
