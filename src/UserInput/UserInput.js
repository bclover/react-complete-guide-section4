import React from 'react';

const UserInput = (props) => {
    const myStyle = {
        border: '2px solid green',
    }
    return (
    <div>
        <input type="text" 
            style={myStyle}
            onChange={props.change} 
            value={props.name}>
        </input>
    </div>
    )
}
export default UserInput;
