import React, { useState, useEffect } from 'react';




const Battle = () => {

  const url = 'http://localhost:3001/hamsters/random';
  const [hamsterOne, setHamsterOne] = useState(null);
  const [hamsterTwo, setHamsterTwo] = useState(null);


  useEffect(() => {
    const getHamsters = async () => {
      console.log('fetch körs')
        const randomHamsterOne = await fetch(url)
            .then(res => res.json())
        const randomHamsterTwo = await fetch(url)
            .then(res => res.json())

            setHamsterOne(randomHamsterOne)
            setHamsterTwo(randomHamsterTwo)
    }
    getHamsters()

}, [])


useEffect(() => {
  if(hamsterOne && hamsterTwo) {
    console.log('hamstrarna visas')
    console.log(hamsterOne)
    console.log(hamsterTwo)
   
      

  }
},[hamsterOne, hamsterTwo])


  return (
    <div> 
      {hamsterOne !== null  ? <h2>Hamster number one is: {hamsterOne.name}</h2> : 'no data' }</div>
 
   
);



}

export default Battle;