import React from 'react';

const CharComponent = (props) => {

    const charComponentStyle = {
        display: 'inline-block',
        padding: '15px',
        margin: '15px',
        textAlign: 'center',
        border: '1px solid blue',
    }

    return (
        <div style={charComponentStyle} onClick={props.click}>
            <span>
              {props.char}
            </span>
        </div>
    )
}

export default CharComponent;