import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div className='ui card'>
      <div className='content'>
        {/**this will allow us to pass children to the approval card */}
        {props.children}
      </div>
      <div className='extra content'>
        <div className='ui two buttons'>
          {/**the class name changes the css */}
          <div className='ui blue button'>Approve</div>
          <div className='ui basic red button'>Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
