const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

  


app.use(express.static(__dirname + '/../build'));

app.use('/assets', express.static('hamsters'));

// routes 

// hamsters 
const hamstersRoute = require('./routes/hamsters');
app.use('/hamsters', hamstersRoute);


// charts
const chartsRoute = require('./routes/charts');
app.use('/charts', chartsRoute);

// games 
const gamesRoute = require('./routes/games');
app.use('/games', gamesRoute)

// stats
const statsRoute = require('./routes/stats');
app.use('/stats', statsRoute);




app.listen(3001, () => {
  console.log('Server up n running on port 3000')
})