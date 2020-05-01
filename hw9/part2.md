1- The Web Storage API permits applications to store data within user's browser

2- Cookies were used before HTML5 was introduced and was included in each server request

3- Web Storage is more secure, Web storage can store large amount of data and Web Storage can be store locally

4- Domain and protocol

5- LocalStorage and SessionStorage cannot be read server-side

6- Cookies can be read server-side. They are popular because they allow sites to store user date directly into the user's web browser.They contain data about user's session.

7- To prevent client side access to that cookie

8- The HttpOnly flag blocks access of a cookie from client-side and therefore Javascript code

9- localStorage and sessionStorage of the Web Storage API are connected to a particular origin, domain and protocol.
This connection makes is possible for all pages from one origin to store and access the same data


10- Storage Interface of the Web Storage API permit to set, retrieve and remove data.

11- The Storage Object, represented by the localStorage and sessionStorage objects contains storage.length, the length property which returns an integer representing the number of data items stored in the Storage object.

12- Storage.clear(), storage.removeItem(), storage.setItem(), storage.getItem(), storage.key()

13- To prevent client-side access to that cookie.

14- localStorage store data until the browser is cleared via Javascript and sessionStorage store data until the data is closed

15- Both store data locally that cannot be accessed from server-side

16- The try...catch statement handles some or all of the errors that may occur in a block of code, while still running code.
The try statement allows you to define a block of code to be tested for errors while it is being executed.
The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.


17- To catch exceptions. We set and get our sessionStorage and also check if we have exceeded our sessionStorage quota.


18- Convert a Javascript object into a string. 
const csv = JSON.stringify(sessionStorage['autosave']);
    console.log(csv);

19- The csv value is the result of the transformation of the javascript object into a string. It's important because it indicate whether the text has been saved or not

20- Please copy and paste the result of the console.log(csv) after you have clicked on the Save Text To File For Download button. Hint: you should try this out only after you have completed building your application.
"Message saved to SessionStorage"