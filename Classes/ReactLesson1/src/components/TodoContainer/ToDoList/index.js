import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem.component";

/* eslint-disable react/prop-types */
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }
  DeleteItem(id) {
     
    this.props.onBtnDelete(id);
  }
  ReturnItem(id){
    console.log("Delete item",id);
    this.props.onBtnReturn(id);
  }

  renderList() {
    const { data } = this.props;
    

    if (data) {

      return data.map((item, i) => {
        if(item.status=='not-buy'&this.props.status) {  
          return ( 
            <ToDoItem
            key={i}
            id={item.id}
            item={item}
            DeleteItem={this.DeleteItem.bind(this)}
            status={this.props.status}
          /> 
               );}
              else if(item.status=='buy'&!this.props.status){    
                 return ( <ToDoItem
                key={i}
                id={item.id}
                item={item}
                ReturnItem={this.ReturnItem.bind(this)}
                status={this.props.status}
                />) }  ;})
                            
    }
  }
  render() {
    return <ul className="todo-list">{this.renderList()}</ul>;
  }
}
export default ToDoList;
