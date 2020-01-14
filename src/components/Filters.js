import React from 'react';

const Filters = (props) => {

    const handleSearch = (ev) => {
        props.handleSearch({ value: ev.target.value });
    };

    return (
        <form className='form'>
            <input className='form--input' id="inputCharacter" type="text" placeholder="Rick" onChange={handleSearch} />
        </form>
    )
};

export default Filters;