# STRML react-grid-layout test
```
npm install
npm start
```
Tool used https://github.com/STRML/react-grid-layout <br />
Examples: https://strml.github.io/react-grid-layout/examples/8-localstorage-responsive.html <br /><br />
Explanation: ResponsiveLocalStorageLayout component (inside src folder), is basic layout i copied and modified from above example, it is responsive layout that saves layout in localstorage for each breakpoint.<br /><br />
These are the options are used, its for grid behaviour, breakpoints, adn some behaviour:<br />
![Alt text](./public/rgl-img-01.png?raw=true "Title")<br /><br />
Bellow are  "cards" that are inside  ResponsiveReactGridLayout element, inside datagrid attribute there are settings for width height and x/y position inside grid, there are move smart ways to set up grid layout but you will have to check it in documentation.<br />
![Alt text](./public/rgl-img-02.png?raw=true "Title")<br /><br />
Inside those divs should go widgets you can find them in my repo inside widgets-new folder. <br /><br />
Every widget is wrapped in **placeholder-card** class wich was teporary replacement for **div with data-grid**.<br />
And all widgets are inside **placeholder-wrapper** that is temporary replacement for **ResponsiveReactGridLayout** component.<br />



