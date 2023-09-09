import React from 'react';

const Error = ({errorMessage}) => {
    return (
        <h1 style={{color: "red"}}> {errorMessage}</h1>
    );
};

export default Error;