Part 2:

1- Validation form is when data is entered in a website or web app then checked if the data entered follows the constraints set by the application

2- Two types of client side validation: Real-time validation and on-submit validation

3- HTML5 Built-in validation provide the ability to validate user data without the help of Javascript. 'Required' is one of the attribute that help validate a form in html. It is necessary as it will not allow the form to be run until the input with the attribute required has been filed properly

4- <input type="text" name="username" placeholder="create username" pattern="^(?=.*\d)(?=.*[a-zA-Z]).{7,15}$" required>
<input type="email" name="mail" placeholder="enter your email"
pattern="(\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b)" required>
<input type="password" name="password" placeholder="create a password"
pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{13,24}$" required>

5- HTML5 form validation doesn't need JavaScript to run but the Constraint Validation API uses JavaScript. 

6-  The title attribute, because it overrides any messages set up in JavaScript with “.setCustomValidity( )”

7- Client-form Validation is not enough because of the lack of security

8- 
* Protect application from malicious attacks.
* Protect user data but requiring complex password format
* Getting users data in correct format. 

9- Pattern is one of the most important feature in HTML5 form control. It's achieved by forcing the user to use a specific set of characters combination.


10- 
- Required = Specifies whether a form field needs to be filled in before the form can be submitted.
- Pattern = Specifies a regular expression that defines a pattern the entered data needs to follow.
- Type = Specifies whether the data needs to be a number, an email address, or some other specific preset type.
- minlength and maxlemgth = Specifies the minimum and maximum length of textual data (strings)
- min and max = Specifies the minimum and maximum values of numerical input types
- :valid = CSS pseudo-class, which lets you apply a specific style to valid elements.
- :invalid = CSS pseudo-class, and sometimes other UI pseudo-classes

