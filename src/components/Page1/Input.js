import React from 'react'

const Input = ({change , price , click}) => {
    return (
       <>  
      <div className = "row p-2 " >
           <h1 className = " mx-5">Q</h1>
           <input type="text" aria-label="First name" className="form-control rounded" 
                  onChange = {change}
            style= {{width : 200 , marginLeft : 135}}
            />
      </div>      
      
       <h1 style = {{marginLeft : 500}}>{price} </h1>
        <button className = "btn btn-primary" 
        type = "button" onClick = {click}
         style = {{marginLeft :750}} 
        > 
          Add Order 
        </button>
     
     </>
    )
}

export default Input
