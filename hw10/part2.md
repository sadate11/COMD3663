1. What built-in JavaScript method creates an HTML element on the DOM? Please explain what it does. What is its syntax? What are the parameters? What is its return value? Please provide code from your Monsters Search API app as an example of using this built-in method.

 document.createElement()
It creates an HTML element on the page specified by tagName, or an HTMLUnknownElement if tagName is not recognized.
 Syntax: const element = document.createElement(nodeName);
Parameters: nodeName, which is the name of the element you want to create.
 Return value: a new Element.
 Example: function createNode(element) {
        return document.createElement(element)}

2. What built-in JavaScript method sets the value of an attribute on a specified element? Please explain what it does. What is its syntax? What are its parameters? What exceptions can it throw? Please provide code used in the Week 10 Homework README.md as an example of how it could be used dynamically instead of the approach used in the actual project code.
 Element.setAttribute() 
 This method sets the value of an attribute on the specified element. If the attribute already exists, the value is updated. Otherwise, a new attribute is added with the specified name and value.
 Syntax: Element.setAttribute(name, value);
 Its parameters are name, value, and return value. It can throw exceptions such as InvalidCharacterError.
 Example from HW: img.src = `${imageUrl}`

3. What is the built-in method that allows you to add a child node to a parent node? Please explain what it does. What is its syntax? What are its parameters? What is its return value? Please provide code from your Monsters Search API app as an example of using this built-in method.

 Node.appendChild()
 It's a a method that allows you to add a node to the end of the list of child nodes of a specified parent node.
 Syntax: parentNode.appendChild(childNode);
 Its parameters are childNode and its return value is the appended child (nodeChild).
 Example from HW: function append(parent, el) {
        parent.appendChild(el)}

4. What is the built-in method that creates text inside an Element Node? Please explain what it does. What is its syntax? What are its parameters? What is its return value? Please provide a code example from the Manipulating The DOM: Creating Elements, Setting Attributes, Appending Children slide deck.

 document.createTextNode()
 It creates a Text Node with the specified text. HTML elements often consist of both an element node and a text node. 
 Syntax is document.createTextNode(text);
 Parameters is text, of type string which is the text of the text node
 The return value is a text node object with the created text node
 Example from HW: let txtValue = div.textContent || div.innerText

5. Provide a code example that uses the .createElement() method, the .createTextNode() method, and the .appendChild() method, altogether. Explain what is going on with the code.

const mainContent = document.querySelector(".main-content");
const newPage = document.createElement("page");

mainContent.appendChild(newPage);

const newLine = document.createElement("h1");
mainContent.appendChild(newLine);
const newText = document.createTextNode(
"I'm learning how to manipulate the DOM!"
);
newLine.appendChild(newText);

In this code example, it shows that when you set the .innerHTML property of an Element Node, it creates the appropriate nodes and makes them child nodes of the element that you set the .innerHTML property on. If there is text in the .innerHTML you set, then text nodes will be created to hold that text.

6. What properties do the same thing as the .createTextNode() method? And what is the difference between the two properties?
InnerHTML. InnerHTML property of an Element Node, i.e., li, it creates the appropriate nodes and makes them child nodes of the element that you set the .innerHTML property on. If there is text in the .innerHTML you set, then text nodes will be created to hold that text.

7. When is .createTextNode() preferable over .innerHTML?
It's preferable because you want to display text without the security risks. You would create a Text Node and set the value of its text, and the browser won't interpret any HTML in it.

8. Does order matter when appending child nodes/elements to their parent node/element? Why?
The appending element order doesn't matter.

9. What does the return statement do?
The return keyword is used to return from a method when its execution is complete. When a return statement is reached in a method, the program returns to the code that invoked it.

10. What does the console.log(monsters) called right before the monsters.map() method, print out to the Chrome Developer Tools console? Please copy and paste it as your answer to this question.

11. What does the console.log(monster) called inside the monsters.map() method, at the top, print out to Chrome Developer Tools console? Please copy and paste it as your answer to this question.
Uncaught ReferenceError: monster is not defined
at <anonymous>