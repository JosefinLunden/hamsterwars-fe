import React from 'react'; 
import './MatchUp.css';

const MatchUp = ( props ) => {

  const winningHamster = props.winner

  return (
    <div> 
      <h4> The winner is {winningHamster.name}</h4>
      <img src={`/assets/${winningHamster.imgName}`} alt="a cute hamster"/>
      <p className="winningHamsterInfo">{winningHamster.name} loves {winningHamster.loves} and eating {winningHamster.favFood}.</p>
      <p className="winningHamsterInfo">{winningHamster.name} has won {winningHamster.wins} battles and lost {winningHamster.defeats}.</p>
    </div>
  )




}

export default MatchUp;