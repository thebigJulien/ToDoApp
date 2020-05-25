import React from 'react';
import Item from './item';
import EmptyScreen from './EmptyScreen';


const Done = (props) => {
    let { data } = props;

    const onUpdateItem = (id) => {
      props.callGrandma(id);
    };

  let donesList = data.map((el) => {
    return <Item key={el._id} info={el} callYourParent={onUpdateItem}></Item>;
    
  });
    return (
        <div className="done">
            <h4>Done</h4>
            {data.length > 0 ? donesList : <EmptyScreen></EmptyScreen>}        
        </div>
    );
};

export default Done;
