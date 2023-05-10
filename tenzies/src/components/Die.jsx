export default function Die(props){
    return (
        <div onClick={props.holdDice} className={`die_box ${props.isHeld ? "true" : ""}`} 
        id="dice" data-dice="data">
            <p className="dice">{props.value}</p>
        </div>
    )
}