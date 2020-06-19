import { useFetch } from "./SliderUseFetch.component";

import React, { useState } from "react";

function FetchComponent(props) {
  const data = useFetch(props.url);

  return (
    <div class="data-container">
      {data.map((dataItem) => props.render(dataItem))}
    </div>
  );
}
export default FetchComponent;
// <FetchComponent url="http://example.com/posts" render={post => <Post post={post} />} />
