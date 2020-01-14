import React from 'react';
import apiCharacters from '../api/characters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import Filters from './Filters';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/app.scss'

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

  //api

  componentDidMount() {
    apiCharacters().then(characters => this.setState({ characters }));
  }

  //search

  handleSearch(data) {
    this.setState({
      search: data.value
    })
  }

  //characterCard with Details

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

  //filter of characters

  filterCharacters() {
    return this.state.characters
      .filter(characters => characters.name === this.state.search.value);
  }

  render() {
    const filteredCharacter = this.state.characters.filter(characters => {
      return characters.name.toLowerCase().includes(this.state.search.toLowerCase())
    });
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Filters handleSearch={this.handleSearch} />
            <CharacterList characters={filteredCharacter} />
          </Route>
          <Route path='/characters/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div >
    );
  }
}

export default App;
