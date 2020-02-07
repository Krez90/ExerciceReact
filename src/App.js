import React, { Component } from 'react'
import Animaux from './Animaux'
import './App.css'

const animaux = {
  'animal1': {
  'nom': 'Chouette',
  'sexe': 'femelle'
  },
  'animal2': {
    'nom': 'Brador',
    'sexe': 'Mâle'
  },
  'animal3': {
    'nom': 'Jade',
    'sexe': 'femelle'
  }
}


class App extends Component {
  state = {
    animaux,
  }


 render () {

  const liste = Object.keys(animaux)
  .map(animal => 
      <Animaux 
      key={animal}
      nom={animaux[animal].nom}
      sexe={animaux[animal].sexe}/>)

   return(
      <div>
        <h1>Bonjour les animaux</h1>
        { liste }
      </div>
   )
 }
}

export default App
