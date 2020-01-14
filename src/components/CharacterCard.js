import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
    const { id, image, name, species } = props.characters;
    const route = `/characters/${id}`;
    return (
        <tr>
            <td>
                <Link to={route}>
                    <img src={image} alt='character' />
                    <div>
                        <p>
                            {name}
                        </p>
                        <p>
                            {species}
                        </p>
                    </div>
                </Link>
            </td>
        </tr>
    )
};

export default CharacterCard;