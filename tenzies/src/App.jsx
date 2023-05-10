import { useState, useEffect } from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

function App() {

const [dice, setDice] = useState(allNewDice())
const [tenzies, setTenzies] = useState(false)
const value = Math.floor(Math.random(1)*6)


useEffect(() => {
  const allHeld = dice.every(die => die.isHeld)
  const firstValue = dice[0].value
  const allSameValue = dice.every(die => die.value === firstValue)
  if(allHeld && allSameValue){
    setTenzies(true)
    
  }

},[dice])

function holdDice(id){
  setDice(oldDice => 
    oldDice.map((die) => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : 
      die
    })
)
}

function generateNewDie(){
  return {
    value: Math.floor(Math.random(1)*6), 
    isHeld: false,
    id: nanoid(),
  }
}

  function allNewDice(){
    const newArray = []
    for(let i=0; i<10; i++){
      newArray.push(generateNewDie())
    }
    console.log(newArray)
    return newArray
  }

  const elementValue = dice.map(die => <Die 
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
      
    />)

  function theRoller(){
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

  function reset(){
    setDice(allNewDice())
  }


  

  return (
    
    <div className='App'>

      
      <main className="main">
      {tenzies ? <Confetti/> : ""}
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="die_container"> 
            {elementValue}
          </div>
          <button className="roll_dice" onClick={tenzies ? reset : theRoller}>{tenzies ? "New Game" : "Roll"}</button>
      </main>
    </div>
    
  )
}

export default App
