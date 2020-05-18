import React from 'react';
import Item from './item';


const Done = (props) => {
    let { data } = props;

  let donesList = data.map((el) => {
    return <Item key={el._id} info={el}></Item>;
    
  });
    return (
        <div className="done">
            <h4>Done</h4>
            {donesList}
        </div>
    );
};

export default Done;
