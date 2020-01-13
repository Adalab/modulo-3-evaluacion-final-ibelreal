import React from 'react';
import logo from '../images/logo.png';
import apiCharacters from '../api/characters';
import CharacterCard from './CharacterCard';
import CharacterDetail from './CharacterDetail';
import CharacterList from './CharacterList';
import Filters from './Filters'
import characters from '../api/characters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      characters: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.filterCharacters = this.filterCharacters.bind(this);
  }

  componentDidMount() {
    apiCharacters().then(characters => this.setState({ characters }));
  }
  handleSearch(data) {
    this.setState({
      search: data.value
    })
  }

  filterCharacters() {
    return this.state.characters
      .filter(characters.includes(characters.name, this.state.search));

  }

  render() {
    console.log(this.state.characters);
    return (
      <div>
        <img src={logo} alt='Logo rick and morty' />
        <form>
          <label htmlFor="inputCharacter"> Introduce al personaje</label>
          <input id="inputCharacter" type="text" onChange={this.handleSearch} />
        </form>
        <CharacterList characters={this.state.characters} />

      </div>
    );
  }
}

export default App;
