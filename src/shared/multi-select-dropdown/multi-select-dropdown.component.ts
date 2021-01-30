import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.scss'],
})
export class MultiSelectDropdownComponent {
  @Input() options: string[];
  @Input() allOptionsKey: string;
  @Output() optionsSelection: EventEmitter<string[]> = new EventEmitter();
  public optionsForm = new FormControl();
  public selectedOptions: string[] = [];

  onOptionSelected(options: string[]): void {
    this.selectedOptions = options;
    this.optionsSelection.emit(this.selectedOptions);
  }

  public trackByFunc(index: number, item: string): string {
    return item;
  }
}
