import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
    const { image, name, status, origin, episode, species } = props.characters;
    return (
        <div>
            <Link to='/'>
                <button>
                    <i className="fas fa-chevron-circle-left">
                    </i>
                    Volver
            </button>

            </Link>
            <table className="tableDetail">
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
                                Status: {status === 'Dead' ? (<i className="fas fa-skull-crossbones"></i>) : status}
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