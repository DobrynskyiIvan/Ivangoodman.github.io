import React from "react";
import "../TodoContainer/TodoContainer.component.scss";
import AddTodo from "./AddTodo/index";
import ToDoList from "./ToDoList/index";

import { default as data } from "../../data/MOCK_DATA.json";
//  let data=[];
class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }
  onBtnClick(text) {
    const data = this.state.data;
    data.unshift({
      id: Date.now(),
      text,
      status:"not-buy"
    });
    this.setState({ data });
  }
  onBtnReturn(id){
    console.log("Container", id);
    let data = this.state.data;
    data = data.filter((item) => {if(item.id == id){

      item.status='not-buy'
      return item
      
    }
  else
  return item
});
    console.log(data);
    this.setState({ data });

  }
  onBtnDelete(id) {
    console.log("Container", id);
    let data = this.state.data;
    console.log(data);
    data = data.filter((item) => {if(item.id == id){

      item.status='buy'
      return item
      
    }
  else
  return item
});
    console.log(data);
    this.setState({ data });
  }
  render() {
    return (
      <div className="container">
        <AddTodo onBtnClick={this.onBtnClick.bind(this)} />
        <h2 className="listOfThings">List of things to do</h2>

        <ToDoList
          data={this.state.data}
          onBtnDelete={this.onBtnDelete.bind(this)}
          status= {this.props.status}
          onBtnReturn={this.onBtnReturn.bind(this)}
        />
      </div>
    );
  }
}
export default TodoContainer;
