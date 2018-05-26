import { Component, OnInit } from '@angular/core';
import { Joke } from '../interface';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  title = 'Lets Help';

  jokes: Joke[];

  constructor(){
    this.jokes = [
			{
        id: 1,
				setup: "What did the cheese say when it looked in the mirror?",
				punchline: "Hello-Me (Halloumi)",
				hide: true
			},
			{
        id: 2,
				setup: "What kind of cheese do you use to disguise a small horse?",
				punchline: "Mask-a-pony (Mascarpone)",
				hide: true
			},
			{
        id: 3,
				setup: "A kid threw a lump of cheddar at me",
				punchline: "I thought ‘That’s not very mature’",
				hide: true
			},
    ];
  }

  ngOnInit(): void {
  }
      
  toggle(joke) {
    debugger;
    joke.hide = !joke.hide;
  }

  findElementWithIndex() {
    debugger; 
    let result = this.jokes.find(joke => joke.id == 1);
    console.log(result);

    }

}
