import React from 'react';
import { useState, useEffect } from 'react';
import './Stats.css'

const Stats = () => {
  const url = 'http://localhost:3001/stats/total';
  const [allGames, setAllGames] = useState(0);
  const [TopFiveWinningHamsters, setTopFiveWinningHamsters] = useState(null)
  const [TopFiveLosingHamsters, setTopFiveLosingHamsters] = useState(null)
  

  useEffect(() => {
    const getAllGames = async () => {
      console.log('fetch körs')
        const allFetchedGames = await fetch(url)
            .then(res => res.json())

            setAllGames(allFetchedGames)
            
    }
    getAllGames()

}, [])

useEffect(() => {
  const getTopFiveWinners = async () => {
    console.log('fetch körs')
      const topFiveWinners = await fetch('http://localhost:3001/charts/top')
          .then(res => res.json())

          setTopFiveWinningHamsters(topFiveWinners)
          
  }
  getTopFiveWinners()

}, [])

useEffect(() => {
  const getTopFiveLosers = async () => {
    console.log('fetch körs')
      const topFiveLosers = await fetch('http://localhost:3001/charts/bottom')
          .then(res => res.json())

          setTopFiveLosingHamsters(topFiveLosers)
          
  }
  getTopFiveLosers()

}, [])





  return (
    <div>
      
      <h1>All battles</h1>
      <section className="allGames">
        {allGames ? <p>It has been played {allGames.allGames} battles </p> : 'no data'}
      </section>

      {TopFiveWinningHamsters ?<section className="topFive">
          <h2>Top five winners</h2>
          <ol>
          {TopFiveWinningHamsters.map(hamster => (
              <li key={hamster.id}>
                  {hamster.name}  <br/> <img src={`http://localhost:3001/assets/${hamster.imgName}`} alt="cute hamster"/>  <br/> Total wins: {hamster.wins} <br/> Total games: {hamster.games}
              </li>
          ))}
          </ol>
        </section>
        : 'no data'
      }

      {TopFiveLosingHamsters ?<section className="topFive">
          <h2>Top five losers</h2>
          <ol>
          {TopFiveLosingHamsters.map(hamster => (
              <li key={hamster.id}>
                  {hamster.name}  <br/> <img src={`http://localhost:3001/assets/${hamster.imgName}`} alt="cute hamster"/>  <br/> Total defeats: {hamster.defeats} <br/> Total games: {hamster.games}
              </li>
          ))}
          </ol>
        </section>
        : 'no data'
      }

    </div>
  )
}

 

export default Stats;