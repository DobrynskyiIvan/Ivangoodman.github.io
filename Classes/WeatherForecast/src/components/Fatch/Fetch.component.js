import {useFetch} from './UseFetch.component';
import Loader from '../Loader/Loader.component';
import React, { useState  } from "react";
 

function FetchComponent (props) {
  console.log("props.url before",props.url)
  const [data, isLoading] = useFetch(props.url);
  console.log("props.url after",props.url)
  if(isLoading) return <Loader/>
  return (
    <div class="data-container">
      {data.map(dataItem => props.render(dataItem))}
    </div>
  );
}
export default FetchComponent



