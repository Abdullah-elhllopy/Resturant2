import React from 'react'

const Menu = ({arr , handleChange ,  menu  , change1  , change2}) => {
     const foodMenu = arr.map((food) => (
            <option key={food.name} value={food.name}>
            {food.name}
            </option>
               )
               );

    
    return (
         
          <div  className = "row p-2">
        
        <h1 className = " mx-5">Catogary</h1>


        <select className = "" value={menu} onChange={handleChange} style= {{width : 200}}>
          {foodMenu}
        </select>
        

         <div style = {{marginLeft : 100}}>
        <div className = "row mx-5">
            
            <input type="checkbox"  onChange={change1 } /> 
            <span className= "mx-2"> 
                 <strong>Combo-add 10Le</strong> 
            </span>
          
        </div>
       <br/>
        <div className = "row mx-5">
             <input type="checkbox"  onChange={change2} />
             <span className= "mx-2"> 
                 <strong>Spicy-add 5Le </strong> 
             </span>
        </div>
      </div> 
      </div>



    )
}

export default Menu
