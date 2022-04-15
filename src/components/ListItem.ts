class ListItem extends ParentDependent<HTMLDivElement> {
  private _book: Book;

  public constructor(book: Book) {
    super("div");
    this.addClass("book-item");

    const idText = new ParentDependent("span");
    idText.textContent = `Book #${book.id}`;

    const title = new ParentDependent("div");
    title.addClass("title");
    title.textContent = book.name;

    const authorText = new ParentDependent("div");
    authorText.addClass("author");
    authorText.textContent = book.author;

    const description = new ParentDependent("div");
    description.addClass("description");
    description.textContent = "Publisher: " + book.publisher + ", " + book.year;

    const deleteFunction = async () => {
      try {
        await Api.delete(book.id);
        handleGetBooks();
      } catch (error: any) {
        alert(error.message);
      }
    };

    const deleteButton = new Button("Delete", ["btn-danger"], deleteFunction);

    idText.setParent(this);
    title.setParent(this);
    authorText.setParent(this);
    description.setParent(this);
    deleteButton.setParent(this);

    this._book = book;
  }

  public get id() {
    return this._book.id;
  }
}
