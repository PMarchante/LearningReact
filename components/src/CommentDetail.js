import React from "react";

const CommentDetail = props => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.avatar} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metaData'>
          <span className='date'>{props.time}</span>
          <div className='text'>
            {props.comment}
            
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* need this to be able to call this jsx somewhere else*/
}
export default CommentDetail;