import React from 'react';

const List = ({  Show , lis ,click}) => {
   return(
     <div className = "container border border-secondary" 
     style = {{marginTop : 20 , marginLeft : 250 ,width : 900 , height :250  ,marginBottom : 40}}
     
     >
        <table className="table table-bordered">
        <thead>
            <tr>
                <th>price</th>
                <th>AddOns</th>
                <th>Q</th>
                <th>Item</th>
            </tr>
        </thead>
        { Show&&
        <tbody>
            <tr>     
               {lis}
               
              </tr>
        </tbody>
         }
    </table>       

     <button type = "button" className = "btn btn-primary" 
      style ={{marginTop :90 , marginLeft :750}}
       onClick = {click}
      >
        New Order 
        
        </button>

    </div>





   )


  }
export default List;