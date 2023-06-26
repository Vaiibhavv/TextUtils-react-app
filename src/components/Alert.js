import React from "react";

export default function Alert(props) {

    const capitalize=(word)=>
    {
         const lower= word.toLowerCase();
         return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
  return (
    <div style={{height:"40px"}}>
    {props.alert&&
    <div> 
      <div className="alert alert-primary alert-dismissible fade show py-0" role="alert">
        {props.alert.msg}
      </div>
    </div>}
    </div>
  );
}
