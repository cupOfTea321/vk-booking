import './App.css'
import {Box, Container, Typography} from "@mui/material";
import MyForm from "./components/MyForm.jsx";


function App() {

  return (
    <Container className={'container'} maxWidth={"xl"}>
        <Typography variant={'h3'} component={'h1'} sx={{
            marginTop: '20px'
        }}>
            Бронирование переговорной
        </Typography>

        <Box sx={{

            display: 'flex',
            flexDirection: {lg: 'row', md: 'column', sm: 'column', xs: 'column'},
            justifyContent: 'center',
            marginTop: '8%',
            width: '100%',
            alignItems: 'center',
        }}>

            <MyForm/>
        </Box>

    </Container>
  )
}

export default App
