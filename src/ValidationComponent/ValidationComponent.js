import React from 'react';

const ValidationComponent = (props) => {

    let message = 'Text too short!';

    if(props.length > 5){
        message = 'Test is long enough! :-)';
    }

    return (
        <div>
            {message}
        </div>
    )
}
export default ValidationComponent;