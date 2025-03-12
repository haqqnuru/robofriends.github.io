import React from "react";

import Card from "./card";
import { robots } from "./robots";


function Cardlist({robots}) {
 
     return (
       <div>
         {
         robots.map((user,i) => {
        return (<Card key={i} 
        name = {robots[i].name} 
        username={robots[i].username}
        id ={robots[i].id} 
        email = {robots[i].email} 
        />
        );
     }) }
       </div>
     );
 }

 export default Cardlist;