import React from 'react';

const Item = (props) => {
    const { text, status } = props.info;
    let icon;
    
    if(status) icon = <span>&#10003;</span>
    else icon = <span>&#10061;</span>
    return(
        <div className={status ? 'toDoneItem' : 'toDoItem'}>
        <p>{text}</p>
        <button className="btn">{icon}</button>
        </div>
    )
}


export default Item;
