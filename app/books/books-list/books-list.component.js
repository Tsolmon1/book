"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var book_service_1 = require("../book.service");
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
var BooksListComponent = (function () {
    function BooksListComponent(_bookService) {
        //this.booksInStock = 2;
        //  this.books = _bookService.getBooks();
        this._bookService = _bookService;
        //showMessage: string = 'test';
        this.favoriteMessage = "";
        this.imageWidth = 100;
        this.showImage = true;
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
    BooksListComponent.prototype.onFavoriteClicked = function (message) {
        this.favoriteMessage = message;
    };
    BooksListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    BooksListComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BooksListComponent.prototype.getBooks = function () {
        var _this = this;
        this._bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
    };
    return BooksListComponent;
}());
BooksListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        // selector: 'bs-books-list',
        templateUrl: 'books-list.component.html'
    }),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BooksListComponent);
exports.BooksListComponent = BooksListComponent;
//# sourceMappingURL=books-list.component.js.map