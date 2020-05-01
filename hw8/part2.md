1- What does AJAX stand for?
AJAX stands for Asynchronous Javascript and XML

2- What does XML stand for?
eXtensible Markup Language

3- What object does AJAX use to request data from the server?
AJAX use the built-in browser XMLHttpRequest object to request data from the server

4- What is the special feature of AJAX that makes developers like to work with it? Hint: It has to do with enhancing the User Experience (UX).
AJAX has the ability to updates specific pages of a site instead of reloading the entire site

5- Explain the basic five steps involved in the execution of an AJAX XMLHttpRequest between the browser and the server.
When an event occurs in the browser, an XMLHttpRequest Object is created and an HttpRequest is sent over the Internet to communicate with the server. The server in its turn process the HttpRequest then creates a response and send the data back to the browser over the Internet and back to the browser which process the return data using Javascript then update the page content.

6- What makes up the core of AJAX?
XMLHttpRequest makes up the core of Ajax

7- What is the XMLHttpRequest Object used for?
It's used to exchange data with the web server behind the scenes

8- What is the syntax for XMLHttpRequest()?
Variable = new XMLHttpRequest();

9- Give me an example of XMLHttpRequest(). Use your project code please.
Const movieData = new XMLHttpRequest();

10- What must be called before any other method calls and why?
The XMLHttpRequest() must be called before any other methods calls

11- In the OMDB Api project, even though the OMDB Api is served over http, we use https. Why?
http cannot be used anymore on a live server. GitHub Pages don't allow the use of http


12- What keyword is used to initialize the XMLHttpRequest object?
"New" is used to initialize the XMLHttpRequest

13- What does new XMLHttpRequest() create?
New XMLHttpRequest create a new XMLHttpRequest object.

14- What are the 5 things that the new keyword does?
	- Create an object from a constructor function
	- it sets the new object's internal, inaccessible property to be the constructor function's external, accessible, property object
	- it executes the constructor function using the newly created object whenever this is mentioned
	- Makes the this keyword point to the newly created object.
	- Returns this id if the function doesn't return its own object.

15- Using code from your project, give me an example of this being returned due to the use of the new keyword with XMLHttpRequest() to create an instance of the XMLHttpRequest Object.
if (this.readyState === 4 && this.status === 200) {
console.log(this.responseText);
console.log(JSON.parse(this.responseText));
const data = JSON.parse(this.responseText);

document.getElementById("movie-title").innerHTML = data.Title;
document.getElementById("poster").src = data.Poster;
document.getElementById("year").innerHTML = data.Year;
document.getElementById("released").innerHTML = data.Released;
document.getElementById("runtime").innerHTML = data.Runtime;
document.getElementById("director").innerHTML = data.Director;
document.getElementById("writer").innerHTML = data.Writer;
document.getElementById("actors").innerHTML = data.Actors;


16- Describe what the XMLHttpRequest.open() method does.
XMLHttpRequest.open() initialize a newly-created request or re-initializes an existing one

17- Using code from your project, give me an example of XMLHttpRequest.open().
An example: movieData.open("GET", url, true);

18- Tell me what the values passed to the open() method are for, and give me the parameters they represent the values (aka arguments) of. Hint: part of the answer may reside in the slide deck and inside the Related Resources links at the end of the deck, and part will reside in the README.md of the week 8 homework repository. You will have come across the information while reading the instructions for going through the steps of building your project.
The values passed to the open ( ) method are: get, post, put, delete, which resides in the “method” parameterThe second parameter is the URL, a DOMString
The third parameter is a boolean, which indicates whether to perform the operation asynchronously or synchronsly.


19- Using code from your project, give me an example of XMLHttpRequest.send().
movieData.send( );



20- Tell me if there are any values passed to our send() method. What optionally could be passed to the method, and why do we NOT have to pass this optional parameter/argument to our send() method?
There aren’t any values passed to our send( ) method. The send( ) method accepts any parameter, which lets you specify the request’s body. If the request method is “get” or “head”, the body parameter is ignored, and the request body is set to null.

