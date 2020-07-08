import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./Message.css"

const Message = ({ message, username }) => {
    const isUser = username === message.username

    return (
        <div className={`message ${isUser && "message__user"}`}>
            <Card className={isUser ? "user__card" : "guest__card"}>
                <CardContent>
                    <Typography 
                        color="textSecondary"
                        variant="h5" 
                        component="h2"
                    >
                        {message.username}: {message.text}
                    </Typography>
                </CardContent>
            </Card>

        </div>
    );
}

export default Message;
