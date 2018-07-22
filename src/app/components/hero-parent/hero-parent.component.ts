import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../models/hero.model';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {

  heroes = HEROES;
  master = 'Kamal';

  constructor() { 
    debugger;
  }

  ngOnInit() {
  }

}
