import React from 'react';
import Item from './item';

const ToDo = (props) => {
    let { data } = props;
    let toDoList = data.map((el) => {
        return <Item key={el._id} info={el}></Item>;
    });

    return (
        <div className="todo">
            <h4>To Do</h4>
            {toDoList}
        </div>
    );
};

export default ToDo;
