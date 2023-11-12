import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const RegisteredTopic = (props) => {


    return (
        <div>
            <h2>Registered Topic</h2>
            <Stack direction="row" spacing={1}>
                {props.registeredTopics.map((topic, index) => (
                    <Chip size="small" key={index} label={topic} variant="outlined"/>
                ))}
            </Stack>
        </div>
    );
};


export default RegisteredTopic;
