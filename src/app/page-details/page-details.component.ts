import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/core/api.service';
import { ALL_CATEGORIES_KEY, ButtonType, Joke } from '../model';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss'],
})
export class PageDetailsComponent implements OnInit, OnDestroy {
  @Input() selectedButtonType: ButtonType;
  @Output() randomJokeEvent: EventEmitter<Joke> = new EventEmitter();
  @Output() searchedJokesEvent: EventEmitter<Joke[]> = new EventEmitter();
  private selectedCategory: string[] = [];
  private destroy$ = new Subject();
  public buttonType: typeof ButtonType = ButtonType;
  public categoryOptions: string[] = [];
  public inputName: string;
  public searchKey: string;
  public allCategories: string = ALL_CATEGORIES_KEY;
  public isLoading;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCategories().subscribe((categories: string[]) => {
      this.categoryOptions = categories;
      this.categoryOptions.unshift(ALL_CATEGORIES_KEY);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
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
    this.isLoading = true;

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
      .pipe(
        finalize(() => (this.isLoading = false)),
        takeUntil(this.destroy$)
      )
      .subscribe((jokes: Joke[]) => {
        this.searchedJokesEvent.emit(jokes);
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
      .pipe(
        finalize(() => (this.isLoading = false)),
        takeUntil(this.destroy$)
      )
      .subscribe((joke: Joke) => {
        this.randomJokeEvent.emit(joke);
      });
  }
}
