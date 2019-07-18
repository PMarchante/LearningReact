import React from 'react';
import faker from 'faker';

const CommentDetail =(props) => { 
    
    return(
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metaData">
                <span className="date">
                    today at 6:00PM
                </span>
                <div className="text">Nice blosdjfsdij</div>
            </div>
        </div>
    </div>

    
    );
};

export default CommentDetail;