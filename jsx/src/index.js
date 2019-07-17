import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Click on me';
}

//we can create variables in the app and call them later like a global variable
const App = ()=>{
    const buttomText = 'Click Me!'
    const jsObject =  {text:'Click object'};

    return(
        <div>
            <label className="Label" htmlFor="name">Enter name</label>
            <input id='name' type='text'/>
            {/*to place a variable in the jsx, we need to put it in curly brackets*/}
            {/*we can also pass in functions */}
            {/*we cannot pass a JS object to react to show text*/}
            {/**to get around that we need to add .text to the end of it */}
            <button>{jsObject.text}</button>
        </div>
    );

};

//this will render my page
ReactDOM.render(
    <App />, document.querySelector('#root')
);