import React from 'react'

const State = ({arr , menu , handleChange , handleClick , state }) => {
   
    const states = arr.find(item => item.name === menu)?.states.map((state) => (
    <option key = {state.name} value={state.price}    >
     {state.name}
    </option>
  ));

    return (
        <div className = "row p-2 ">
        <h1 className = " mx-5">Meal</h1>
        <select value={state} 
          onChange={handleChange} 
          style= {{width : 200 , marginLeft : 75}} 
          onClick = {handleClick}
          
          >
         {states} 
        </select>
        </div>
    )
}

export default State
