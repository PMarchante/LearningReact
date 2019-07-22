import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from './ApprovalCard';
const App = () => {
  return (
    <div className='ui container comments'>
      {/**this is how we call another jsx file */}
      <ApprovalCard/>
      <CommentDetail
        author='jake'
        time='10:40'
        comment='WOAH!'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='bill'
        time='12:50'
        comment='This is great!'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='sue'
        time='4:32'
        comment='YAHOO!'
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));