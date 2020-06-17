import React from 'react';
import './UploadHamster.css'
import { useState } from 'react';
import { postNewHamster } from './postNewHamster'
import { useEffect } from 'react';

const UploadHamster = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [favFood,setfavFood] = useState('');
  const [loves, setLoves] = useState('');
  const [ newHamsterAdded, setNewHamsterAdded ] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [ageTouched, setAgeTouched ] = useState(false);
  const [favFoodTouched, setFavFoodTouched] = useState(false);
  const [lovesTouched, setLovesTouched] = useState(false);

  let [nameClass, nameError] = nameTouched ? isValidInput(name) : ['',''];
  let [AgeClass, AgeError] = ageTouched ? isValidAge(age) : ['',''];
  let [favFoodClass, favFoodError] = favFoodTouched ? isValidInput(favFood) : ['',''];
  let [lovesClass, lovesError] = lovesTouched ? isValidInput(loves) : ['',''];


  useEffect (() => {
    if(newHamsterAdded)
    console.log(newHamsterAdded)
  }, [newHamsterAdded])

  const clickHandle = event => {
    event.preventDefault()

    postNewHamster(name, age, favFood, loves, setNewHamsterAdded)
    
}


return (
  <section>
    <h1 className="uploadHeadline">Upload your own hamster</h1>
    <form> 
      <div className="form-group">  
        <label>Your hamsters name</label>
        <input type="text" placeholder="Name of the hamster"
        className={nameClass}
        onChange = {e => setName(e.target.value)}
        onBlur= {() => setNameTouched(true)}/>
        <div className="error"> {nameError}</div>
      </div>
      <div className="form-group">
      <label>Age of your hamster</label>
      <input type="text" placeholder="Age of the hamster"
      className= {AgeClass}
      onChange = {e => setAge(e.target.value)}
      onBlur= {() => setAgeTouched(true)}/>
      <div className="error"> {AgeError}</div>
      </div>
      <div className="form-group">
        <label>What is your hamsters favoritfood?</label>
        <input type="text" placeholder="Favoritefood of the hamster"
        className= {favFoodClass}
        onChange = {e => setfavFood(e.target.value)}
        onBlur= {() => setFavFoodTouched(true)}/>
        <div className="error"> {favFoodError}</div>
      </div>
      <div className="form-group">
        <label>What do your hamster love to do?</label>
        <input type="text" placeholder="The thing your hamster loves"
        className= {lovesClass}
        onChange = {e => setLoves(e.target.value)}
        onBlur= {() => setLovesTouched(true)}/>
        <div className="error"> {lovesError}</div>
      </div>
      <button onClick={e=>clickHandle(e)}>Add your hamster to the battle</button>
      <p className={newHamsterAdded ? "" : "hide"}>{newHamsterAdded}</p>
    </form>
    <footer>
    </footer>
  </section>

  )
}

function isValidInput(input) {
  if(String(input) !== '') {
    return ['valid', ''];
  } else {
    return ['invalid', 'Field can not be empty']
  }
}

function isValidAge(age) {
  if(!isNaN(age) && age !== '' && age < 10) {
    return ['valid', '']
  } else {
    return ['invalid', 'Please enter a an age between 0-10 and with numbers'];
  }
}

export default UploadHamster;