

import React, { useEffect, useState } from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';
export default function App(){

  // const randomNumber = Math.ceil(Math.floor(Math.random() * 6))
  
  const [dice,setDice] = useState(allNewDice())
  function generateND(){
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid()
    }
  }
  
  function  allNewDice(){
    let Arr = []
    for(let i = 1; i <= 10; i++){
      Arr.push(generateND())
    } 
    return Arr;
  }
  
  
  function holdDice(id){
    setDice(oldvalue=> oldvalue.map(old => {
      return old.id === id ? {...old, isHeld: !old.isHeld}: old
    }))
  }

  //useEffect
  const [tens,setTens] = useState(false)
  useEffect(()=> {
   const held = dice.every(item => item.isHeld)
   const value = dice.every(item => item.value)
   held === value && setTens(true)
   
  },[dice])

const Dies = dice.map(item => { 
  return <Die 
  value= {item.value} 
  isHeld={item.isHeld} 
  key={item.id}
  holdDice={()=> holdDice(item.id)}
  />
  
}

)


function roll (){
  if(!tens) { 
  setDice(oldvalues => oldvalues.map(old => {
    return old.isHeld ?
     old : generateND();
    })
      
  )}else{
    setTens(false)
    setDice(allNewDice())
  }
}
// const { width, height } = useWindowSize()
  return(
     
    <> 
    <main>
     
    {tens && <Confetti  width={400} height={500}/>}
    <h2 className="h2">Tenzies</h2>
    <p className="p2">The Gamme</p>
      <div className="wrapper"> 
   {Dies}
  
   </div>
  
    </main>
     <button className="btn" onClick={roll}>{tens ? "New Game" : "Roll"}</button>
     </>
  )
}