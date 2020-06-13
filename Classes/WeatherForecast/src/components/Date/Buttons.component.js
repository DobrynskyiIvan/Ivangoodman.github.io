import find from "lodash/find";
import filter from "lodash/filter";
import React, { PureComponent, useState,useEffect,useContext } from "react";
import {WeatherDetail} from '../../context'

import { Button } from "@material-ui/core";
import Time from "./Time.component";
export default function Buttons(props) {
  const { setCurrentWeather } = useContext(WeatherDetail);
  let i=props.group;

    const[groupList,setGroup]=useState(props.group)
    console.log("How the state looks like:",groupList)

   
    return ( 
      <React.Fragment>
  
        {groupList.map((item, i) => {
          if (item.detail.length !== 0) {
              console.log("item.detail:",item.detail)
            return ( 
          <div key={i}>
              <Button
              onClick={() => { 
                groupList[i].show=!item.show 
                props.onToggle();
                setGroup(groupList)
               
              
              }}
              variant="contained"
              color="primary"
              >
              {item.day}
              </Button>
                {item.show ? (
              <p className='timeline'>{item.detail.map((it,i) => { return <Button
                 key={i}
                 onClick={() => { 
                   console.log("item.detail for current from button",it);
                   console.log("type off setCurrentWeather",typeof setCurrentWeather );
                   setCurrentWeather(it)
              
                   
                 
                
                }}
              > <Time  sec={ it.dt+props.timezone} /> </Button> })}   </p>  ) : ( "" )} 
          </div>
            );
          }
        })}
      </React.Fragment>
    );
  }
 
  