import React from 'react';
import logo from '../images/logo.png';
import apiCharacters from '../api/characters';
import CharacterDetail from './CharacterDetail';
import CharacterList from './CharacterList';
import Filters from './Filters';
import characters from '../api/characters';
import CharacterCard from './CharacterCard';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      characters: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.filterCharacters = this.filterCharacters.bind(this);
  }

  componentDidMount() {
    apiCharacters().then(characters => this.setState({ characters }));
  }

  handleSearch(ev) {
    this.setState({
      search: ev.target.value
    })
  }
  renderCharacterDetail(props) {
    const routeId = parseInt(props.match.params.id);
    const characters = this.state.characters.find((item) => {
      return item.id === routeId
    });
    if (characters === undefined) {
      return <p>The character doesn't exist</p>
    }
    else {
      return < CharacterDetail characters={characters} />
    }
  }
  filterCharacters() {
    return this.state.characters
      .filter(characters => characters.name === this.state.search.value
      );

  }

  render() {
    console.log(this.state);
    return (
      <div>
        <img src={logo} alt='Logo rick and morty' />

        <Switch>
          <Route exact path='/'>
            <form>
              <label htmlFor="inputCharacter"> Introduce al personaje</label>
              <input id="inputCharacter" type="text" placeholder="Rick" onChange={this.handleSearch} />
            </form>
            <CharacterList characters={this.state.characters} />
          </Route>
          <Route path='/characters/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div >
    );
  }
}

export default App;
