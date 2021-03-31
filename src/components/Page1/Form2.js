import React, { useState  } from "react";
import Image from '../../Image'
import catogry from './Constant'

const Form2 = () => {
   
   const[name , setName] = useState("");
   const[price , setPrice] = useState(0);
   const [descreption , setDescription] = useState("");
   const[add , setAdd] = useState(false);
   function fraction(f) {
    return f.split('/').reduce((n, d, i) => n / (i ? d : 1));
   }
   const foodMenu = catogry.map((food) => (
            <option key={food.name} value={food.name}>
            {food.name}
            </option>
               )
               );
   
    const [{ menu, state  }, setData] = useState({
    menu: "",
    state: "",
    
  });  
  
  function handlemenuChange(event) {
    setData(data => ({ state: '', menu: event.target.value }));
  }
if(add === true){  
  catogry.forEach((item) => {
     if(menu === item.name){
         item.states.push({"name": name , "price" : price})
     }
  })

  console.log(catogry);
  setAdd(false);
}
 

return (
    <div className ="container" style = {{marginTop :60}}>
         <div className ="row">
         <div>
        <div className = "row p-3 " >
           <p className = " mx-5">name</p>
           <input type="text" aria-label="First name" className="form-control rounded" 
                onChange = {(e)=>setName( e.target.value)}  
            style= {{width : 200 , marginLeft : 45}}
            />
      
         </div>

         
         <div className = "row p-3 " >
           <p className = " mx-5">price</p>
           <input type="text" aria-label="First name" className="form-control rounded" 
                onChange = {(e)=>setPrice(Number( fraction( e.target.value)))}  
            style= {{width : 200 , marginLeft : 47}}
            />
      
         </div> 

         <div className = "row p-3 " >
           <p className = " mx-5">Descreption</p>
           <textarea type="text" aria-label="First name" className="form-control rounded" 
                onChange = {(e)=>setDescription(Number( fraction( e.target.value)))}  
            style= {{width : 400 , marginLeft : 15 , height : 90}}
            />
      
         </div> 
         </div>
                <div style ={{marginLeft : 200}}>
                <Image />
                    </div>
    
     </div>
      
         <div  className = "row p-2">
        
        <p className = " mx-5">Catogary</p>


        <select className = "" value={menu} onClick = {handlemenuChange} style= {{width : 200 , marginLeft :17}}>
          {foodMenu}
        </select>
        </div>


        <button className = "btn btn-primary" 
        type = "button" onClick = {()=>setAdd(true)}
         style = {{marginLeft :750}} 
        > 
          Add Order 
        </button>

    </div>
    )
}

export default Form2 ;
