import React from 'react';
import logo from '../images/logo.png';
import apiCharacters from '../api/characters';
import CharacterCard from '../components/CharacterCard';
import CharacterDetail from '../components/CharacterDetail';
import CharacterList from '../components/CharacterList';

  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        characters: []
      };
    }

    componentDidMount() {
      apiCharacters().then(characters => this.setState({ characters }));
    }

    render() {
      console.log(this.state.characters);
      return (
        <div>
          <img src={logo} alt='Logo rick and morty' />
          // <input />
          Hola Mundo!
          <CharacterCard></CharacterCard>

      </div>
      );
    }
  }

export default App;
