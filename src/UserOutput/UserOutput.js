import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
    <div className="user-output">
        <p> Username is: {props.user}</p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Scelerisque in dictum non consectetur. Nulla facilisi etiam 
            dignissim diam quis enim. Sit amet nulla facilisi morbi. Aenean vel elit scelerisque mauris 
            pellentesque. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Quam elementum 
            pulvinar etiam non quam lacus suspendisse faucibus interdum. Id ornare arcu odio ut. In hac 
            habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit ut aliquam purus. 
            Nibh sed pulvinar proin gravida hendrerit lectus a.
        </p>
        <p>
            In cursus turpis massa tincidunt dui ut ornare. Sed vulputate odio ut enim blandit volutpat 
            maecenas. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Sed viverra 
            tellus in hac habitasse platea dictumst vestibulum rhoncus. Tellus elementum sagittis vitae et. 
        </p>
    </div>
    );
}
export default UserOutput;
