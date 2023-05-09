import React, {useState} from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import dayjs from 'dayjs';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const MyForm = () => {

    const [tower, setTower] = useState('')
    const handleTower = (event) => {
        setTower(event.target.value);
        handleChange(event)
    };

    const [floor, setFloor] = useState('')
    const handleFloor = (event) => {
        setFloor(event.target.value);
        handleChange(event)
    };
    const floors = Array.from({length: 25})
    const [room, setRoom] = useState('')
    const handleRoom = (event) => {
        setRoom(event.target.value);
        handleChange(event)
    };
    const rooms = Array.from({length: 10})

    const [date, setDate] = useState(dayjs(Date.now()))
    const [time, setTime] = useState('')
    const handleTime = (event) => {
        setTime(event.target.value)
        handleChange(event)
    };
    const [comment, setComment] = useState('')
    const handleComment = (event) => {
        setComment(event.target.value)
        handleChange(event)
    };

    const [formdata, setFormdata] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;
        setFormdata(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const [submit, setSubmit] = useState(false)
    const handleSubmit = event => {

        event.preventDefault();

        console.log(JSON.stringify(formdata));
        handleDelete()
        setSubmit(true)
    };
    const handleDelete = () => {
        setTower('')
        setFloor('')
        setRoom('')
        setTime('')
        setComment('')
    }
    return (
        <Box onSubmit={handleSubmit} component="form" sx={{
            display: 'flex',
            flexDirection: 'column',
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
        }}>
            {submit && <Typography sx={{color: 'green', marginTop: '-20px'}}>Thanks for joining!</Typography>}
            <Box  className={'box-form'} sx={{ minWidth: {sm: 320, xs: 290}}}>
                <FormControl required fullWidth sx={{marginBottom: '20px'}}>
                    <InputLabel id="demo-simple-select-label">Выберете башню</InputLabel>
                    <Select
                        value={tower}
                        onChange={handleTower}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Выберете башню"
                        name="Башня"

                    >
                        <MenuItem value={'A'}>А</MenuItem>
                        <MenuItem value={'Б'}>Б</MenuItem>
                    </Select>

                </FormControl>

                <FormControl required fullWidth sx={{marginBottom: '20px'}}>
                    <InputLabel id="floor-label">Выберете этаж</InputLabel>
                    <Select
                        value={floor}
                        onChange={handleFloor}
                        labelId="floor-label"
                        id="floor"
                        label="Выберете этаж"
                        name="Этаж"
                    >
                        {floors.map((floor, index) => (
                            <MenuItem key={index} value={index + 3}>{index + 3}</MenuItem>
                        ))}
                    </Select>

                </FormControl>

                <FormControl required fullWidth sx={{marginBottom: '20px'}}>
                    <InputLabel id="room-label">Выберете переговорную</InputLabel>
                    <Select
                        value={room}
                        onChange={handleRoom}
                        labelId="room-label"
                        id="room"
                        name="Переговорная номер"
                        label="Выберете переговорную"
                    >
                        {rooms.map((floor, index) => (
                            <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
                        ))}
                    </Select>

                </FormControl>


                <LocalizationProvider  dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <DatePicker label="Дата бронирования"
                                    name="Дата бронирования"
                                    value={date}
                                    onChange={(newValue) => setDate(newValue)}/>
                    </DemoContainer>
                </LocalizationProvider>

                <FormControl required fullWidth sx={{marginBottom: '20px'}}>
                    <InputLabel id="time-label">Выберете время</InputLabel>
                    <Select
                        value={time}
                        onChange={handleTime}
                        labelId="time-label"
                        id="time"
                        name="Время бронирования"
                        label="Выберете переговорную"
                    >
                            <MenuItem value={'10:00-16:00'}>10:00-16:00</MenuItem>
                            <MenuItem value={'16:00-22:00'}>16:00-22:00</MenuItem>
                    </Select>

                </FormControl>

                <FormControl fullWidth sx={{marginBottom: '20px'}}>
                <TextField value={comment}
                           onChange={handleComment}
                           required
                    name="Комментарий"  id="outlined-basic" label="Комментарий" variant="outlined" />
                </FormControl>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%'}}>
                <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>Отправить</Button>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete}>Очистить</Button>
            </Box>

        </Box>
    );
};

export default MyForm;
