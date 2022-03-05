class Book {
    constructor(author, title, ISBN) {
        this.author = author;
        this.title = title;
        this.ISBN = ISBN;
        this.TOC = ""
    }
    describe() {
        return `${this.title} was written by ${this.author} - ISBN: ${this.ISBN} - TOC: ${this.TOC}`;
    }
}

class Menu {
    constructor() {
        this.books = []
    }
    mainMenu() {
        let menuSelection = prompt(`
            1) Add a book
            2) Remove a book 
            3) Update a book 
            4) View all books
        `)
        switch (menuSelection) {
            case "1":
                this.addBook();
                break;
            case "2":
                this.deleteBook();
                break;
            case "3":
                this.updateBook();
                break;
            case "4":
                this.viewBooks();
                break;
            default:
                this.mainMenu();
        }
    }
    addBook() {
        const newBook = new Book(
            prompt("Enter author: "),
            prompt("Enter title: "),
            prompt("Enter ISBN: ")
        );
        let response = prompt("Do you want to add TOC? (y/n): ")
        if (response == 'y') {
            let chapters = prompt("Enter the TOC: ");
            newBook.TOC = chapters;
        } 
        console.log(newBook);
        this.books.push(newBook);
        this.mainMenu();
    }
    deleteBook() {
        alert("Delete a book")
    }
    viewBooks() {
        let listOfBooks = "";
        for (let book of this.books) {
            listOfBooks += (book.describe() + "\n");
        }
        prompt(listOfBooks + "\n\nEnter 0 to go back to the main menu: ");
        this.mainMenu();
        
    }
    updateBook() {
        alert("Update a book")
    }
}

const menu1 = new Menu();
menu1.mainMenu();