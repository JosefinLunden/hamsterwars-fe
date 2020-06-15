import React from 'react';
import { Link } from 'react-router-dom';





const Startpage = () => (
  <div>
    <header>
      <img className="hero-image" src="/hamster1.svg" alt="a hamster" />
    </header>
    <main>
      <p className="pHeadQuestion">who is the cutiest hamster?</p>
      <h1 className="mainHeadline">Hamster war</h1>
      <p>All hamsters are cute, but which one is the cutiest? Here you can vote for your favorite hamster, see which one has won the most battle. And the poor ones who's lost the most times. You can also upload your own hamster to see if it has what it takes to win.</p>
      <p>May the cutiest hamster win! </p>
      <Link to='/battle'>
        <button>Ready for a battle?</button>
      </Link>
     
    </main>
    <footer>
    </footer>
  </div>
)

export default Startpage;