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
var forms_1 = require("@angular/forms");
var book_service_1 = require("../../services/book.service");
var NewBookFormComponent = (function () {
    function NewBookFormComponent(bookService) {
        this.bookService = bookService;
    }
    NewBookFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookForm = new forms_1.FormGroup({
            title: new forms_1.FormControl(''),
            author: new forms_1.FormControl(''),
            ISBN: new forms_1.FormControl(''),
            editorial: new forms_1.FormControl(''),
            category: new forms_1.FormControl('')
        });
        this.bookService.getBooks()
            .subscribe(function (books) {
            _this.bookList = books;
            console.log(books);
        });
    };
    NewBookFormComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        //console.log(value,valid);
        this.bookService.addBook(value)
            .subscribe(function (book) {
            _this.bookList.push(book);
            console.log(bookList);
        });
    };
    return NewBookFormComponent;
}());
NewBookFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'newbook-form',
        templateUrl: 'new-book-form.component.html'
    }),
    __metadata("design:paramtypes", [book_service_1.BookService])
], NewBookFormComponent);
exports.NewBookFormComponent = NewBookFormComponent;
//# sourceMappingURL=new-book-form.component.js.map