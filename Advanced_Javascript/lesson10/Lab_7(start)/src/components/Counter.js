import React,{useReducer} from "react";
const initialState={count:0};
const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';
const RESET='RESET';

function reducer(state,action ) {
    console.log('reducer trigered');
    console.log('reducer state',state);
    console.log('reducer action', action);
    switch (action.type) {
        case INCREMENT:
            return {count:state.count+1}
        
         case DECREMENT:
            
            return {count:state.count-1}

            case RESET:
            
                return {count:0}
        default:
            return state;
    }
    
}

const Counter = () => {
   const [state, dispatch] = useReducer(reducer, initialState );
   const increment=()=>dispatch({type:INCREMENT})
   const decrement=()=>dispatch({type:DECREMENT})
   const reset=()=>dispatch({type:RESET})
   return (
       <>
       <h1>Counter:{state.count}</h1>
       <button 
       className={'btn btn-primary mr-3'} 
       onClick={decrement}
       >
           Decrement
       </button>
       <button 
       className={'btn btn-warning mr-3'} 
       onClick={reset}
       >
        Reset
       </button>
       <button 
       className={'btn btn-success mr-3'} 
       onClick={increment}
       >
         Increment
       </button>
       </>
   )

};

export default Counter;
