class Book{
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;;
        this.isbn = isbn;
        this.printIsbn = function(){
            console.log(this.isbn) // método diretamente na definição da classe
        }
    }
   
}

//instancia
var book = new Book('A Revolução dos Bichos', '200', '1020');
book.printIsbn(); // método
console.log(book.title)