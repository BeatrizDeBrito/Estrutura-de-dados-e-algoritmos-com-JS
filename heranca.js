
class ITBook extends Book{
    constructor(title, pages, isbn, technology){
        super(title, pages, isbn);
        this.technology = technology
    }
    printTechnology(){
        console.log(this.technology)
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1232', 'JS ')
console.log(jsBook.isbn)
