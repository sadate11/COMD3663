Part 2: 

1- Canvas was introduced in 2004 by Apple. It was used in Mac 0S X Webkit component which was used to power applications such as Safari Browser

2- Canvas 2D provide a way to draw graphics with Javascript. 2D stands for two-dimensional.

3- The canvas element is an HTML5 element which can be used to draw graphics using Javascript

4- The other elements are "Width" and "Height"

5- The default canvas size is 300w and 150h

6- Nothing will render on the page

7- The canvas would render 300w and 150h

8- We need to create a context. a Context is an object whose methods provide the drawing interface

9- The 2 main drawing styles are 2D and WebGL. 2D for two-dimensional drawing and WebGL for three-dimensional drawing

10- We can access our drawing context using the HTL5 built-in method .getContext()
    const ctx = canvas.getContext("2d");


11- The two primitive shapes supported are Rectangles and paths

12- Other shapes are created by combining shapes. Built in canvas-path functions help create complex shapes

13- clearRect(), fillRect(), strokeRect()

clearRect() parameters:
    . x: the x-axis coordinates of the rectangle's starting point
    . y: the y-axis coordinates of the rectangle's starting point
    . width: the width of the rectangle. Positive value right, negative values left
    .height: the height of the rectangle. Positive values down, negative values up


fillRect() parameters:
    . x: the x-axis coordinate the upper left of the rectangle.
    . y: the y-axis coordinate the upper left of the rectangle.
    . width: the rectangle's width
    . height: the rectangle's height

strokeRect() parameters:
. x: the x-axis coordinates of the rectangle's starting point
    . y: the y-axis coordinates of the rectangle's starting point
    . width: the width of the rectangle. Positive value right, negative values left
    .height: the height of the rectangle. Positive values down, negative values up



14- A path is a list of points connected by segment of lines

15- Extra steps to drawing paths
. Draw a path
. use drawing commands to draw into the path
. When the path is created, stroke and fill the path to render it.

