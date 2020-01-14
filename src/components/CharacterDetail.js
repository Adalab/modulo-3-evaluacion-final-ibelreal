import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
    console.log(props.characters)
    const { image, name, status, origin, episode, species } = props.characters;
    return (
        <div>
            <h3>Volver</h3>
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <img src={image} alt='character' />
                        </td>
                        <td>
                            <p>
                                {name}
                            </p>
                            <p>
                                Status: {status}
                            </p>
                            <p>
                                Species: {species}
                            </p>
                            <p>
                                Origin: {origin.name}
                            </p>
                            <p>
                                Episodes: {episode.length}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table >
        </div>
    );
};

export default CharacterDetail;