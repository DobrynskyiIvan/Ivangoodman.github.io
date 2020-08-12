import React, {  useState } from "react";
import Item from "./Item";
import Filter from "./Filter";


const ListItems=({title, items})=>{

  
const[searchTerm,setTerm]=useState('')

  const updateFilter = ({ target }) => {
    setTerm(  target.value );
  };

  const getBody=() =>{
   let out = [...items];
    if (searchTerm) {
      out = out.filter(item =>
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return out.map(item => <Item title={title} item={item} key={item.id} />);
  }

    return (
      <section>
        <h3 className="mb-3">Title</h3>
        <Filter filter={searchTerm} onChange={ updateFilter} />

        <ul className="mb-3 p-0">{ getBody()}</ul>
      </section>
    );
  }

 
export default ListItems;
