import React, { useState  } from "react";
import Menu from './Menu'
import Sate from './State'
import Input from './Input'
import List from './List'
import catogry from './Constant'


function Form() {
   const [{ menu, state  }, setData] = useState({
    menu: "",
    state: "",
    
  });  
  

const [Check , setCheck] = useState(false);
const [Check1 , setCheck1] = useState(false);

  var [price , setPrice] = useState(0);
  const[input , setInput] = useState(0)

const[Show , SetShow ] = useState(false);

function fraction(f) {
    return f.split('/').reduce((n, d, i) => n / (i ? d : 1));
  }
 
const handlePrice = (e)=> {
   setPrice(e.target.value);
   
}


  function handlemenuChange(event) {
    setData(data => ({ state: '', menu: event.target.value }));
  }

  function handleStateChange(event) {
    setData(data => ({ ...data, state: event.target.value }));  
}

 var added = "Not Added";
 if(Check === true || Check1 === true){
  added = "Added"
 }


var arr = [];
arr.push( price  , added,input , "Burger" )

const list = arr.map((e) =>(
 
  <td>{e}</td>

  ) )


if(Check === true && Check1 === false ){
  if(input === 0 ) price = (Number(price) + 10)
  else price = (Number(price) + 10) * input   
}

 else if(Check1 === true && Check === false ){
  if(input === 0 ) price = (Number(price) + 5)
  else price = (Number(price) + 5) * input 
}
else if (Check === true && Check1 === true  ){
  if(input === 0 ) price = (Number(price) + 15)
  else price = (Number(price) + 15) * input 
}

else{
  if(input === 0 ) price = Number(price) 
  else price = (Number(price) ) * input 

}
   
  return (
<>
   <div className = " container border border-secondary" style = {{marginTop : 50 , marginLeft : 250 ,width : 900 , height :360 }}>
    
    <form onSubmit={() => console.log("Submitted")} className = "d-grid gap-3" >
    
        
        <Menu 
             arr = {catogry} 
             handleChange= {handlemenuChange}
             menu ={menu}  
             change1 = {(e)=>setCheck(e.target.checked)} 
             change2 = {(e)=>setCheck1(e.target.checked)}
          />
       
          <Sate 
             arr = {catogry}  
             menu ={menu} handleChange = {handleStateChange}
             handleClick = {handlePrice} 
             state ={state}
          />

         <Input change = {(e)=>setInput(Number( fraction( e.target.value)))}
          price = {price} 
          click = {()=>SetShow(true)}
          
          />
    
    </form>
    
    </div>
    <List  Show = {Show} lis = {list} click = {()=>SetShow(false)  } />
   

</>
  );
}

export default Form;
