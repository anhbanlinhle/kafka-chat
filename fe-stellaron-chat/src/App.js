import React from 'react';
import SelectTopic from './SelectTopic';
import MessageList from './MessageList';

function App() {
    return (
        <div style={
            {
                margin: "0 auto",
                width: "90%",

            }
        }>
            <h1>Kafka</h1>
            <SelectTopic />
            <MessageList />
        </div>
    );
}

export default App;
