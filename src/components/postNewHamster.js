export const postNewHamster = async (name, age, favFood, loves ) => {
  let body = {
    name,
    age,
    favFood,
    loves,
    games: 0,
    wins: 0,
    defeats: 0
  }
  let requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  };

  fetch(`/api/hamsters/`, requestOptions)
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.log('error', error));


  }

 