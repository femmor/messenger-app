import React from 'react';

const Message = ({ text, username }) => {
    return (
        <>
            <h3>
                {username}: {text}
            </h3>
        </>
    );
}

export default Message;
