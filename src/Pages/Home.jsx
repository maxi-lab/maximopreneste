import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import CardProject from '../Components/CardProject';
import CardExpirience from '../Components/CardExpirience';
import CardSkill from '../Components/CardSkill';
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
              <CardProject title="Proyecto 1" description="Descripción del proyecto 1" img="https://via.placeholder.com/150" link="https://www.google.com"/>
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
              <Typography variant='h2' align='center'>
                Experiencia
              </Typography>
              <CardExpirience title="Experiencia 1" description="Descripción de la experiencia 1" img="https://via.placeholder.com/150" altImg="Imagen de la experiencia 1"/>
            </Grid>
            <Grid size={{xs: 12, md: 12}}>
              <Typography variant='h2' align='center'>
                Habilidades
              </Typography>
              <CardSkill title="Habilidad 1" img="https://via.placeholder.com/150" altImg="Imagen de la habilidad 1"/>
              </Grid>
          </Grid>
        </>
      )
}