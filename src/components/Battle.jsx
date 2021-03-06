import React, { useState, useEffect } from 'react';
import './Battle.css';
import {updateHamsterWinner, updateHamsterLoser, saveGame } from './BattleFunctions';
import MatchUp from './MatchUp';


const Battle = () => {

  const url = '/api/hamsters/random';
  const [hamsterOne, setHamsterOne] = useState(null);
  const [hamsterTwo, setHamsterTwo] = useState(null);
  const [winner, setWinner] = useState(null);
  const [newGame, setNewGame] = useState(null)


  useEffect(() => {
    const getHamsters = async () => {
      console.log('fetch körs')
        const randomHamsterOne = await fetch(url)
            .then(res => res.json())
        const randomHamsterTwo = await fetch(url)
            .then(res => res.json())

            setHamsterOne(randomHamsterOne.randomHamster)
            setHamsterTwo(randomHamsterTwo.randomHamster)
    }
    getHamsters()

}, [newGame])


const createNewGame = (setNewGame, newGame, setWinner) => {
  setNewGame(!newGame);
  setWinner(null);
}

const handleClick = (winner, loser) => {
  setWinner(winner);
  updateHamsterWinner(winner.id);
  updateHamsterLoser(loser.id);
  saveGame(hamsterOne, hamsterTwo);
}

  return (
    <div> 
      <header>
        <h1>Vote for the cutest hamster</h1>
      </header>
      <section className="hamsterBattle">
       
        <article className="hamsterCard">
          {hamsterOne !== null  ? 
          <>
          <h2>{hamsterOne.name}</h2>
          <img src={`/assets/${hamsterOne.imgName}`} alt="a cute hamster"/>
          <button onClick={() => handleClick(hamsterOne, hamsterTwo)}>{hamsterOne.name} is the cutest</button>
          </>
          : 'no data'}

        </article>
        <article className="hamsterCard">
          {hamsterTwo !== null  ? 
          <>
          <h2>{hamsterTwo.name}</h2>
          <img src={`/assets/${hamsterTwo.imgName}`} alt="a cute hamster"/>
          <button onClick={() => handleClick(hamsterTwo, hamsterOne)}>{hamsterTwo.name} is the cutest</button>
          </>
          : 'no data'}

        </article>
        
        
        </section>
        <article className="winningHamster">
          {winner ?  <MatchUp winner={winner} />  : '' }
          
          
        </article>
        <article className="newHamster">
        <button onClick={() => createNewGame(setNewGame, newGame, setWinner)}>Ready for a new battle?</button>

        </article>
        <footer>
        </footer>
      </div>
);

}

export default Battle;