/**
 * creting nesting structure:
 * <div id="parent">
 *      <div id="child">
 *             <h1>This is a heading</h1> 
 *             <h1>This is second heading</h1> 
 *      </div>
 *       <div id="child2">
 *             <h1>This is a heading2</h1> 
 *             <h1>This is second heading</h1> 
 *      </div>
 * </div>
 */

const parent = React.createElement(
    'div', 
    { id: 'parent' }, 
    [React.createElement('div', { id: 'child' }, [ 
        React.createElement('h1' , {} , "This is heading") , 
        React.createElement('h2' , {} , "This is second heading"),
    ]) , 
    React.createElement('div', { id: 'child2' }, [ 
        React.createElement('h1' , {} , "This is heading2") , 
        React.createElement('h2' , {} , "This is second heading2"),
    ])]
);

const heading = React.createElement("h1", { id: "heading", abc: "xyz" }, "Hey , This is our first React program");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 
root.render(parent);