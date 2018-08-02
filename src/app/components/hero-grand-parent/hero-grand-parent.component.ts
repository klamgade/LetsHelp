import { Component, OnInit } from '@angular/core';
import { GRAND_HEROES } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-grand-parent',
  templateUrl: './hero-grand-parent.component.html',
  styleUrls: ['./hero-grand-parent.component.css']
})
export class HeroGrandParentComponent implements OnInit {

  heroes = GRAND_HEROES;
  master = 'DALLI GIRL';
  
  constructor() { }

  ngOnInit() {
  }

}
