import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import CardProject from '../Components/CardProject';
import CardExpirience from '../Components/CardExpirience';
import CardSkill from '../Components/CardSkill';
import ToDo from'../assets/img/todo.png';
import py from '../assets/img/python.webp'
export default function Home() {
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
            <Grid size={{xs: 12, md: 6}}>
              <Typography variant='h2' align='center'>
                Proyectos
              </Typography>
              <CardProject title="To Do App" description="Una aplicacion basica de tareas" img={ToDo} link="https://maxi-lab.github.io/Tareas-REACT/"/>
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
              <Typography variant='h2' align='center'>
                Experiencia
              </Typography>
              <CardExpirience title="Ayudantia de Sintaxis y Semantica de los lenguajes" description="Me encargo de correccion de Trabajos Practicos de Tipos de Datos Abstractos (en Python) y de resolucion de consultas de TAD y automatas." img={py} altImg="En la catedra se utiliza python"/>
            </Grid>
            <Grid size={{xs: 12, md: 12}}>
              <Typography variant='h2' align='center'>
                Habilidades
              </Typography>
              <CardSkill title="Habilidad 1" img="https://via.placeholder.com/150" altImg="Imagen de la habilidad 1"/>
            </Grid>
            <Grid size={{xs: 12, md: 12}}>
              <Typography variant='h2'>
                Sobre mi
              </Typography>
              <Typography variant='body1'>
                Analizo el problema teniendo en cuenta la accesibilidad, usabilidad y experiencia de usuario.
                Me gusta trabajar en equipo y aprender de los demás.
                Siempre estoy dispuesto a ayudar a los demás y a compartir mis conocimientos.
                Me gusta aprender cosas nuevas y estar en constante evolución.
              </Typography>
              <Typography variant='body1'>
                Soy estudiante de Ingeniería en Sistemas en la Universidad Tecnologica Nacional Facultad Regional La Plata.
              </Typography>
            </Grid>
          </Grid>
        </>
      )
}