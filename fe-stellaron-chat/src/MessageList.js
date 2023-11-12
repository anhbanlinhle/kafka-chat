import * as React from 'react';
import { useState, useEffect } from 'react';
import io from "socket.io-client";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const socket = io('http://localhost:1111');

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    let isReceived = false;
    useEffect(() => {
        if (!isReceived) {
            socket.on('newMessage', (message) => {
                setMessages(prevMessages => [...prevMessages, message]);
                console.log(message);
            });
            isReceived = !isReceived;
        }
    }, []);

    return (
        <div>
            <h2>Messages</h2>
            <Stack direction="column" spacing={1}>

                {messages.map((message, index) => (
                    <Chip key={index} label={`[${message.topic}] ${message.message}`} style={
                        {
                            width: "fit-content",
                        }
                    }/>
                ))}
                <br />
            </Stack>
        </div>
    );
};

export default MessageList;
