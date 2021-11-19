// Demo: ES6 Classes

interface Readable {
  read(): string
}

class Book implements Readable {
  title: string
  author: string

  version: number = 0.5

  constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }

  read(): string {
    return this.author
  }

  getTitle(): string {
    return this.title
  }
}

const book = new Book("TNKS", "Poom")
