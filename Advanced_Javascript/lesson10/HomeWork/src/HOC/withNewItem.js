import React,{useState} from "react";

export default function withNewItem(Component ) {
    
        return function Wrapped( {addItem}) {
            const [value,setValue]  = useState("")
              
              
              const handleChange = ({ target }) =>setValue(target.value );
              
              const  handleSubmit = e => {
                  e.preventDefault();
                   addItem( value);
                   setValue( "" );
                };
                 
            return    <Component handleChange={handleChange} handleSubmit={handleSubmit} value={value}  />
            
        };
    } 
    
 
