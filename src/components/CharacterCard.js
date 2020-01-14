import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
    const { id, image, name, species } = props.characters;
    const route = `/characters/${id}`;
    return (
        <tr className='container'>
            <td className='container__box'>
                <Link to={route}>
                    <img src={image} alt='character' />
                </Link>
                <div className='container__box--info'>
                    <p>
                        {name}
                    </p>
                    <p>
                        {species === 'Human' ? (<i className="fas fa-running"></i>) : (<i className="fab fa-reddit-alien"></i>)}
                    </p>
                </div>
            </td>
        </tr>
    )
};

export default CharacterCard;