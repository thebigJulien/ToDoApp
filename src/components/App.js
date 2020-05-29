import React from 'react';
import '../scss/App.scss';
import Navigation from './navigation';
import ToDo from './todo';
import Done from './done';
import Notification from './Notification';
import ToDoForm from './FormTodo';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items:[
        {
          status: false,
          _id: '5e4e852c9b28370008805bc8',
          text: 'Buy cheese',
          date: '2020-02-20T13:10:04.229Z',
        },
        {
          status: false,
          _id: '5e4e88515ad2770007b1b36b',
          text: 'Order a taxi',
          date: '2020-02-20T13:23:29.432Z',
        },
        {
          status: false,
          _id: '5e4e88525ad2770007b1b36c',
          text: "Trim my eyebrows",
          date: '2020-02-20T13:23:30.580Z',
        },
        {
          status: true,
          _id: '5eae8b6114063e000752e5c0',
          text: 'Get a LinkedIn friend',
          date: '2020-05-03T09:14:09.575Z',
        },
        {
          status: true,
          _id: '5eae8b6214063e000752e5c1',
          text: 'Vacuum my windows',
          date: '2020-05-03T09:14:10.881Z',
        },
        {
          status: true,
          _id: '5eae8b6614063e000752e5c2',
          text: 'Prepare my workout session',
          date: '2020-05-03T09:14:14.142Z',
        },
      ],
      showNotification: false,
    };
  }

  

    updateFam = (id) => {
      const newItems = this.state.items.map((el) => {
        if (el._id === id) el.status = !el.status;
        return el;
      });
  
      this.setState({
        items: newItems,
        showNotification: true,
      });
    };


    handleNotification = () => {
        this.setState({
          showNotification: false,
        });
    };

    handleNewTodo = (todo) => {
      //Add the new item to the state
      console.log(todo)
      let newItems = [...this.state.items, todo];
      this.setState({ items: newItems });
      
    };

  render() {
    let items = this.state.items;
    let toDos = items.filter((el) => el.status === false);
    let dones = items.filter((el) => el.status === true);
    let showNotification = this.state.showNotification;


return (
  <div className="App">
    <Navigation></Navigation>
    {showNotification && <Notification hideNotification={this.handleNotification}></Notification>}
    <ToDoForm addTodo={this.handleNewTodo}></ToDoForm>
    <ToDo data={toDos} callGrandpa={this.updateFam}></ToDo>
    <Done data={dones} callGrandma={this.updateFam}></Done>
  </div>
    );
  }
}


export default App;
