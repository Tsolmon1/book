import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IBook} from '../book';
import { BookService } from "../book.service";
/*
interface IBook {
  bookAuthor:  string,
  bookTitle:  string,
  bookPrice:  number,
  bookDescription:  string,
  publishedOn: Date,
  inStock: string,
  bookReviews:  number,
  bookImageUrl:  string,
  hardcover?: boolean
}
*/
@Component({
  moduleId: module.id,
  // selector: 'bs-books-list',
  templateUrl: 'books-list.component.html'
})

export class BooksListComponent implements OnInit {
  books: IBook[];
  //showMessage: string = 'test';
  favoriteMessage: string = "";
  imageWidth: number = 100;
  showImage: boolean = true;
  public booksInStock: number;
  errorMessage: string;

  constructor(private _bookService: BookService){
    //this.booksInStock = 2;
  //  this.books = _bookService.getBooks();
    
}
/*   ngOnInit() {
    console.log('Init', this.booksInStock);
  }
  ngOnChanges() {
    console.log('new change detected');
  }

  changeMethod(): void {
    this.animals = ['dog','cat'];
    console.log('change method happened', this.animals);
  } */
  //animals : string[] = ['zebra', 'moose'];
/*   books: any[] = [{ 
  bookAuthor:  "Tom Jones",
  bookTitle:  "War and Peace 2",
  bookPrice:  29.95,
  bookDescription:  "Book of historical fiction",
  publishedOn: new Date('02/11/1921'),
  inStock: "yes",
  bookReviews:  15,
  bookImageUrl:  "app/assets/images/656.jpg",
  //hardcover: false
},
{ 
  bookAuthor:  "Tom Jack",
  bookTitle:  "War and Peace 3",
  bookPrice:  19.95,
  bookDescription:  "Book of historical fact",
  publishedOn: new Date('02/11/1921'),
  inStock: "yes",
  bookReviews:  18,
  bookImageUrl:  "app/assets/images/656.jpg",
}
] */
/*
  onNotifyClicked(message:string):void {
    this.showMessage = message;
  }
  */
 onFavoriteClicked(message:string):void {
  this.favoriteMessage = message;
}
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit() {
    this.getBooks()
  }
  
  
  getBooks() {
    this._bookService.getBooks()
    .subscribe(
      books => this.books=books,
      error=>this.errorMessage = <any>error
    );
  }
}