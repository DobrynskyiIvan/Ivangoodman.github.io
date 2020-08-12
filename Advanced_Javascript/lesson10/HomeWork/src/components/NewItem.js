import React   from "react";
import withNewItem from '../HOC/withNewItem'
 

const NewItem=({value,handleSubmit,handleChange} )=>  (
      <form onSubmit={ handleSubmit}>
        <div className="row">
          <div className="col-md-10">
            <input
              className="form-control mb-3"
              type="text"
              onChange={ handleChange}
              value={value}
            />
          </div>
          <div className="col-md-2">
            <input className="btn btn-success" type="submit" value="Add item" />
          </div>
        </div>
      </form>
    );
  
 
 

export default withNewItem(NewItem);
