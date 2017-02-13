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
var book_service_1 = require("../../services/book.service");
var BooksComponent = (function () {
    function BooksComponent(bookService) {
        this.bookService = bookService;
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) {
            _this.books = books;
            console.log(books);
        });
    };
    BooksComponent.prototype.addBook = function (event) {
        var _this = this;
        event.preventDefault();
        var newBook = {
            title: this.title,
            author: this.author,
            ISBN: this.ISBN,
            editorial: this.editorial,
            category: this.category
        };
        this.bookService.addBook(newBook)
            .subscribe(function (book) {
            _this.books.push(book);
        });
    };
    BooksComponent.prototype.deleteBook = function (id) {
        var books = this.books;
        this.bookService.deleteBook(id)
            .subscribe(function (book) {
            if (book.n == 1) {
                for (var i = 0; i < books.length; i++) {
                    if (books[i]._id == id) {
                        books.splice(i, 1);
                    }
                }
            }
        });
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'book',
        templateUrl: 'books.component.html'
    }),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BooksComponent);
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map