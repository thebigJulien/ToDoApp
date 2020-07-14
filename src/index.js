// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// create a react component

const App = () => {
  return ( <
    div className = "ui container comments" >
    <ApprovalCard>
    <CommentDetail 
    author = "Sam"
    timeAgo = "Today at 4:45pm"
    content = "Nice blog post!"
    avatar = {faker.image.avatar()}
    /> 
    </ApprovalCard>
    
    <ApprovalCard>
    <CommentDetail 
    author = "Alex"
    timeAgo = "Today at 2am"
    content = "Wow! Amazing!!"
    avatar = {faker.image.avatar()}
    /> 
    </ApprovalCard>

    <ApprovalCard>
    <CommentDetail 
    author = "Jane"
    timeAgo = "Yesterday at 6pm"
    content = "Nice but a bit simple..."
    avatar = {faker.image.avatar()}
    /> 
    </ApprovalCard>
    </div>
  );
};


// take the react component and show it on the screen

ReactDOM.render( <
  App / > ,
  document.querySelector('#root')
);