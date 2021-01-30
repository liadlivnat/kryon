import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Joke } from '../model';
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-searched-jokes',
  templateUrl: './searched-jokes.component.html',
  styleUrls: ['./searched-jokes.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SearchedJokesComponent implements OnChanges, AfterViewInit {
  @Input() jokes: Joke[] = [];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  public displayedColumns: string[] = ['id', 'categories', 'createdAt'];
  public dataSource;
  public expandedElement: Joke;

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.jokes);
    this.setSorting();
  }

  ngAfterViewInit(): void {
    this.setSorting();
  }

  public dateSorted(): void {
    this.expandedElement = undefined;
  }

  private setSorting(): void {
    this.dataSource.sort = this.sort;
  }
}
