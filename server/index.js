const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 2048;

app.use(express.static(__dirname + '/../build'));

app.use('/api/assets', express.static('hamsters'));

// routes 

// hamsters 
const hamstersRoute = require('./routes/hamsters');
app.use('/api/hamsters', hamstersRoute);


// charts
const chartsRoute = require('./routes/charts');
app.use('/api/charts', chartsRoute);

// games 
const gamesRoute = require('./routes/games');
app.use('/api/games', gamesRoute)

// stats
const statsRoute = require('./routes/stats');
app.use('/api/stats', statsRoute);


app.server.listen(port, () => console.log('Server is listening on port ' + port));