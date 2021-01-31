import { Component, OnInit } from '@angular/core';
import { ButtonType, Joke } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public buttonType: typeof ButtonType = ButtonType;
  public selectedButtonType: ButtonType;
  public randomJoke: Joke;
  public searchedJokes: Joke[];

  ngOnInit(): void {
    this.selectedButtonType = ButtonType.random;
  }

  public onButtonSelected(buttonType: ButtonType): void {
    this.selectedButtonType = buttonType;
  }

  public getRandomJoke(joke: Joke): void {
    this.randomJoke = joke;
  }

  public getSearchedJokes(jokes: Joke[]): void {
    this.searchedJokes = jokes;
  }
}
