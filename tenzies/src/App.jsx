import { useState } from 'react'
import './App.css'
import Die from './components/Die'

function App() {

const [dice, setDice] = useState(allNewDice())

const value = Math.floor(Math.random(1)*6)

  function allNewDice(){
    const newArray = []
    for(let i=0; i<10; i++){
      newArray.push({
        value: Math.floor(Math.random(1)*6), 
        isHeld: false
      })
    }
    return newArray
  }

  const elementValue = dice.map(die => <Die value={die.value}/>)

  function theRoller(){
    setDice(allNewDice())
  }
  

  return (
    
    <div className='App'>

      
      <main className="main">
          <div className="die_container"> 
            {elementValue}
          </div>
          <button className="roll_dice" onClick={theRoller}>Roll me</button>
      </main>
    </div>
    
  )
}

export default App
