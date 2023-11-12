import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import RegistedTopic from "./RegistedTopic";

const SelectTopic = () => {

    const [topic, setTopic] = useState('');
    const [topics, setTopics] = useState([`Đua xe`, 'Bóng đá', 'Bóng chuyền', 'Cầu lông', 'Bóng bàn', 'Bơi lội', 'Bóng rổ'])
    const [registeredTopics, setRegisteredTopics] = useState([]);

    const handleSelectTopic = () => {
        setRegisteredTopics(prevTopics => [...prevTopics, topic])

        // Xóa topic đã chọn từ danh sách topics
        const updatedTopics = topics.filter(t => t !== topic);
        setTopics(updatedTopics);

        setTopic(null)
        axios.post('http://localhost:1111/api/selectTopic', { topic })
            .then(response => {

            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <div>
            <h2>Select a Topic</h2>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={topics}
                isOptionEqualToValue={(option, value) => option === value}
                sx={{ width: 200 }}
                value={topic ? topic : null}
                renderInput={(params) => <TextField {...params} label="Topic"
                />}
                onChange={(event, value) => {
                    setTopic(value);
                }}
            />
            <br/>
            <Button variant="contained" onClick={handleSelectTopic}>Select</Button>
            <RegistedTopic registeredTopics={registeredTopics}/>

        </div>
    );
};

export default SelectTopic;
