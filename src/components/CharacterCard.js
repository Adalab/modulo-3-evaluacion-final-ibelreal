import React from 'react';

class CharacterCard extends React.Component {
    render(props) {
        console.log(this.props.characters.image)
        return (
            <tr>
                <td>

                    <div>
                        <img src={this.props.characters.image} alt='character' />
                    </div>
                    {this.props.characters.name}<br />
                    {this.props.characters.species}
                </td>
            </tr>
        )
    }
}

export default CharacterCard;