import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = ()=>{

    return(

        <div className="ui container comments">
            {/**this is how we call another jsx file */}
            <CommentDetail author="jake"/>
            <CommentDetail author="bill"/>
            <CommentDetail author="sue"/>
            
        </div>
    );


};

ReactDOM.render(<App />,document.querySelector('#root'))