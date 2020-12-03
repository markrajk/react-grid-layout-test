# STRML react-grid-layout test
```
npm install
npm start
```
Tool used https://github.com/STRML/react-grid-layout <br />
Examples: https://strml.github.io/react-grid-layout/examples/8-localstorage-responsive.html <br /><br />
Explanation: ResponsiveLocalStorageLayout component (inside src folder), is basic layout i copied and modified from above example, it is responsive layout that saves layout in localstorage for each breakpoint.<br /><br />
These are the options are used, its for grid behaviour, breakpoints, adn some behaviour:<br />
![Alt text](https://github.com/markrajk/react-grid-layout-test/public/rgl-img-01.png?raw=true "Title")<br /><br />
Bellow are  "cards" that are inside  ResponsiveReactGridLayout element, inside datagrid attribute there are settings for width height and x/y position inside grid, there are move smart ways to set up grid layout but you will have to check it in documentation.<br />
![Alt text](https://github.com/markrajk/react-grid-layout-test/public/rgl-img-02.png?raw=true "Title")<br /><br />
Inside those divs should go widgets you can find them in my repo inside widgets-new folder. <br /><br />
Every widget is wrapped in **placeholder-card** class wich was teporary replacement for **div with data-grid**.<br />
And all widgets are inside **placeholder-wrapper** that is temporary replacement for **ResponsiveReactGridLayout** component.<br /><br />
Main thing is to check how to dinamicly generate layout i am sure there are examples of people using it, this was just test to see if this tool will meet our requirements, and i think it does. <br /><br />
Also there is js code inside widgets.js (my repo). For creating line chart wich is Chart.js and pie chart wich is google chart. <br />
As well as code for **resizeObserver** wich is watching for element size change, that needs to be implemented too... I am not sure how that is going to work in react but here are some link...
<br />
https://juggle.studio/resize-observer/
<br />
https://www.npmjs.com/package/@juggle/resize-observer
<br />
https://medium.com/@eymaslive/react-hooks-useobserve-use-resizeobserver-custom-hook-45ec95ad9844
<br />
I would rather like you to use this or similar library becouse they have support for older browsers. <br /> 
Code i used inside widgets.js is just regular resizeObserver:
<br />
https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver



