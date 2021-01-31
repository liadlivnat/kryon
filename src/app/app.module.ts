import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { SearchedJokesComponent } from './searched-jokes/searched-jokes.component';
import { ButtonsTypeComponent } from './buttons-type/buttons-type.component';
import { HeaderComponent } from './header/header.component';
import { PageDetailsComponent } from './page-details/page-details.component';

@NgModule({
  declarations: [AppComponent, SearchedJokesComponent, ButtonsTypeComponent, HeaderComponent, PageDetailsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule, FormsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
