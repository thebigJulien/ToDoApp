import React from 'react';
import Item from './item';
import EmptyScreen from './EmptyScreen';

const ToDo = (props) => {
    let { data } = props;

    const onUpdateItem = (id) => {
        props.callGrandpa(id);
      };


    let toDoList = data.map((el) => {
        return <Item key={el._id} info={el} callYourParent={onUpdateItem}></Item>;
    });

    return (
        <div className="todo">
            <h4>To Do</h4>
            {data.length > 0 ? toDoList : <EmptyScreen></EmptyScreen>}
        </div>
    );
};

export default ToDo;
