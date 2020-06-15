export const updateHamsterWinner = (id) => {
  let game = JSON.stringify({"wins":1,"defeats":0});

  const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: game
  };

  fetch(`api/hamsters/${id}/results`, requestOptions)
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.log('error', error));

  }
  export const updateHamsterLoser= (id) => {

    let game = JSON.stringify({"wins":0,"defeats":1});
  
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: game
    };
  
    fetch(`api/hamsters/${id}/results`, requestOptions)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.log('error', error));
  
    }



  export const saveGame = (winnerHamster, loserHamster)  => {

      let game = JSON.stringify({"contestants":{"hamsterOne": winnerHamster,"hamsterTwo": loserHamster}, "winner":{"id": winnerHamster}});

      const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: game,
      };

      fetch("api/games", requestOptions)
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.log('error', error));
  }

