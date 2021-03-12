// Define your Book class here:

class Book {
  constructor(title, author, copyrightDate, isbn, pages, timesCheckedOut=0, isDiscarded = 'No'){
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.pages = pages;
    this.timesCheckedOut = timesCheckedOut;
    this.isDiscarded = isDiscarded;
  }

  updateTimesCheckedOut(howMany = 1) { 
    this.timesCheckedOut += howMany;
  }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
  constructor(title, author, copyrightDate, isbn, pages, timesCheckedOut, isDiscarded) {
    super(title, author, copyrightDate, isbn, pages, timesCheckedOut, isDiscarded);
  }

  isDiscardedCheck() {
    let thisYear = new Date().getFullYear();
    if ((thisYear - this.copyrightDate) > 5) {
      this.isDiscarded = 'Yes'; // this would be better with Boolean true/false but the instructions asked otherwise
    }
  }
}

class Novel extends Book {
  constructor(title, author, copyrightDate, isbn, pages, timesCheckedOut, isDiscarded) {
    super(title, author, copyrightDate, isbn, pages, timesCheckedOut, isDiscarded);
  }

  isDiscardedCheck() {
    if (this.timesCheckedOut > 100) {
      this.isDiscarded = 'Yes';
    }    
  }
}

// Declare the objects for exercises 2 and 3 here:

let secretManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1);

let pridePrej = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32);

console.log(secretManual);
console.log(pridePrej);

// Code exercises 4 & 5 here:

secretManual.isDiscardedCheck();  // no => yes
console.log(secretManual);

pridePrej.updateTimesCheckedOut(5); // 32 => 37
pridePrej.isDiscardedCheck();  // no => no
console.log(pridePrej);
