import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
    return (
        <table >
            <tbody className="tableList">
                {props.characters.map(characters => {
                    return (
                        <CharacterCard
                            key={characters.id}
                            characters={characters}
                        />
                    )
                })}
            </tbody>
        </table >
    )
}

export default CharacterList;