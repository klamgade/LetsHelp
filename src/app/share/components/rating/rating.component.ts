import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input('rating-value') rating = 0; 
  @Input() numOfReviews = 0;
  isFavorite: true;

  
  constructor() { 
    console.log("this.rating", this.rating);
  }

  onClick(ratingValue){ 
    debugger;
    this.rating = ratingValue; 
    
    console.log("currnet rating value", this.rating);
    }

    showReviewsNumber(event){

    }

  ngOnInit() {
  }

}
