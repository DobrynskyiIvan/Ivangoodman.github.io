import React, { useState, useEffect } from "react";

export function useFetch(props) {
  const [data, setData] = setState({});

  useEffect(() => {
    (async () => {
      let response = await fetch(props.url);
      if (response.status == 200) {
        let json = await response.json(); // (3)

        console.log("json", json);
        setData(json);
      }
      throw new Error(response.status);
    })();
  }, []);

  return data;
}
