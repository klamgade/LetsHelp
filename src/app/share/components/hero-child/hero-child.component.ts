import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {

  @Input('hero') hero: Hero;
  @Input('master') masterName: string; 

  constructor() { 
    debugger;
  }

  ngOnInit() {
  }

}
