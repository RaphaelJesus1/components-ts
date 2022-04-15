const list: HTMLDivElement = document.getElementById("list") as HTMLDivElement;

const inputName = new InputLabel("Name");
const inputAuthor = new InputLabel("Author");
const inputPublisher = new InputLabel("Publisher");
const inputYear = new InputLabel("Year", InputLabelType.Number);

const form = new Form(
  [inputName, inputAuthor, inputPublisher, inputYear],
  "Create",
  Api.create
);
form.setParent("body");

const handleGetBooks = async () => {
  const bookList = await Api.list();
  if (list.children.length) {
    list.textContent = "";
  }

  bookList.forEach((book: Book) => {
    new ListItem(book).setParent(list);
  });
};

handleGetBooks();
