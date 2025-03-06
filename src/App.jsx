import './App.css'
import {  Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import CardProject from './Components/CardProject';

function App() {
  

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{xs: 6, md: 12}}>
        <Typography variant="h1" align="center">
        Maximo Preneste
        </Typography>
        </Grid>
        <Grid size={{xs: 12, md: 12}}>
        <Typography variant='subtitle1' align='center'>
        Un estudiante de Ingeniería en Sistemas apasionado por el desarrollo web.
        </Typography>
        </Grid>
        <Grid size={{xs: 12, md: 12}}>
          <CardProject title="Proyecto 1" description="Descripción del proyecto 1" img="https://via.placeholder.com/150" link="https://www.google.com"/>
        </Grid>
      </Grid>
    </>
  )
}

export default App
