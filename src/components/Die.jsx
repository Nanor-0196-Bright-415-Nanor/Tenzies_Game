


import React from "react"
export default function Die (props){
    const styles = {
        backgroundColor: props.isHeld ? "white" : "red",
        color: props.isHeld ? "black" : "white"
    }
//  console.log(props.id)
    return(
     
        <div className="die" 
         style={styles} 
         onClick={props.holdDice}>
        {props.value}
        </div>
       
      
    )
}