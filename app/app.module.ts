import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AppComponent }   from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { WelcomeComponent } from "./welcome/welcome.component";
import { BookDetailsComponent } from "./books/book-details/book-details.component";

import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './shared/highlight.directive';
//import {BooksDetailsComponent } from './books/book-details/book-details.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { FavoriteComponent } from './favorites/favorite.component';
import { BookService } from "./books/book.service";
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
    {path: 'welcome', component: WelcomeComponent},
    {path: 'books', component: BooksListComponent},
    {path: 'book/:id', component: BookDetailsComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'}, 
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  ])],
  providers: [BookService],
  declarations: [ AppComponent, BooksListComponent, HighlightDirective, TruncatePipe, FavoriteComponent, WelcomeComponent, BookDetailsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }