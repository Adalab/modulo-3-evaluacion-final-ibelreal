import React from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {
    render(props) {
        return (
            <table className="table">
                <tbody>


                    {this.props.characters.map(characters => {
                        return (

                            <CharacterCard
                                key={characters.id}
                                characters={characters}

                            // handleSearch={props.handleSearch}
                            />
                        )
                    })}

                </tbody>
            </table >

        )
    }
}

export default CharacterList;