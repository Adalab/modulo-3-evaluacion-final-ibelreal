import React from 'react';
import apiCharacters from '../api/characters';
import CharacterDetail from './CharacterDetail';
import CharacterList from './CharacterList';
import Header from './Header';
import Form from './Form';
import Filters from './Filters';
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

  handleSearch(data) {
    this.setState({
      search: data.value
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
      .filter(characters => characters.name === this.state.search.value);
  }

  render() {
    console.log(this.state);
    const filteredCharacter = this.state.characters.filter(characters => {
      return characters.name.toLowerCase().includes(this.state.search.toLowerCase())
    });
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Form handleSearch={this.handleSearch} />
            <CharacterList characters={filteredCharacter} />
          </Route>
          <Route path='/characters/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div >
    );
  }
}

export default App;
