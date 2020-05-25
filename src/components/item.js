import React from 'react';

const Item = (props) => {
    const { text, status, _id } = props.info;
    let icon;
    
    if(status) icon = <span>&#10003;</span>
    else icon = <span>&#10061;</span>

    const callPapa = () => {
        props.callYourParent(_id);
      };

    return(
        <div className={status ? 'toDoneItem' : 'toDoItem'}>
        <p>{text}</p>
        <button className="btn" onClick={callPapa}>{icon}</button>
        </div>
    )
}


export default Item;
