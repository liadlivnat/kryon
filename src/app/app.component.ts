import { Component, OnDestroy, OnInit } from '@angular/core';
import { ALL_CATEGORIES_KEY, ButtonType, Joke } from './model';
import { ApiService } from '../core/api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private selectedCategory: string[] = [];
  private destroy$ = new Subject();
  public buttonType: typeof ButtonType = ButtonType;
  public selectedButtonType: ButtonType;
  public categoryOptions: string[] = [];
  public inputName: string;
  public searchKey: string;
  public allCategories: string = ALL_CATEGORIES_KEY;
  public randomJoke: Joke;
  public searchedJokes: Joke[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.selectedButtonType = ButtonType.random;

    this.apiService.getCategories().subscribe((categories: string[]) => {
      this.categoryOptions = categories;
      this.categoryOptions.unshift(ALL_CATEGORIES_KEY);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  public onButtonSelected(buttonType: ButtonType): void {
    this.selectedButtonType = buttonType;
  }

  public isGoButtonDisabled(): boolean {
    let isDisabled: boolean;

    if (this.selectedButtonType === ButtonType.random) {
      isDisabled = !this.inputName || this.selectedCategory.length === 0;
    } else {
      isDisabled = !this.searchKey || this.searchKey.length < 3;
    }

    return isDisabled;
  }

  public onCategoryChanged(selectedOptions: string[]): void {
    this.selectedCategory = selectedOptions;
  }

  public onGoClicked(): void {
    if (this.selectedButtonType === ButtonType.random) {
      this.getRandomJoke();
    } else {
      this.getAllJokes();
    }
  }

  private getAllJokes(): void {
    const params = {
      query: this.searchKey,
    };

    this.apiService
      .getSearchedJokes(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe((jokes: Joke[]) => {
        this.searchedJokes = jokes;
      });
  }

  private getRandomJoke(): void {
    const categories: string[] = this.selectedCategory.includes(ALL_CATEGORIES_KEY) ? [] : this.selectedCategory;

    const params = {
      name: this.inputName,
    };

    if (categories.length) {
      params['category'] = categories.join(',');
    }

    this.apiService
      .getRandomJoke(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe((joke: Joke) => {
        this.randomJoke = joke;
      });
  }
}
