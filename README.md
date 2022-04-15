# Virtual Library
## 🚩 Objective
This is a front-end project to explore componentization using vanilla typescript. I used Object-oriented concept (OO) to create the components, using classes.
## ⛰️ Scenario
This is an application for a library.  
It's integrated to an API that provides a list of books and information.
##  Operations
Since you open the html file, you can see a list of all books registered in the database.  
Each item, that represents a book, has its informations.  
You can click on the "delete" button of a book item to remove it from the db.  
At least, you can create new books using the form at the top of the page.

## ⚙️ API
The API is a class and has static methods to execute all operations requested in the html file.  
It also has a protection system that refuses many requisitions if there's an operation in process.  
If there's an error with the endpoint or if user tries to make many requests, this class throws errors that will be treated on component and shown as an alert.

## 🚀 "Run" the application
On the first time you open the project, go to its path on terminal or promp and execute:
```bash
$ npm i
$ tsc
```

You can use the **Live Server** extension for vscode and open your browser on its port (casually port 5500)
```
localhost:5500
```
or  
Just open the html file that is inside of public folder
```code
./public/index.html
```

Thanks for reading and good exploration 🕵️
