import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [MultiSelectDropdownComponent, JokeComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [MaterialModule, MultiSelectDropdownComponent, JokeComponent],
})
export class SharedModule {}
