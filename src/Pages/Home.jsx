import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import CardProject from '../Components/CardProject';
import CardExpirience from '../Components/CardExpirience';
import SkillCarrusel from '../Components/SkillCarrusel';
import { projects } from '../Data/projects';
import { expirience } from '../Data/expirience';
import Social from '../Components/Social';
import { Box } from '@mui/material';


export default function Home() {
  return (
        <>
          <Grid container spacing={2}>
            <Grid size={{xs: 6, md: 12}}>
            <Typography variant="h1" align="center" sx={{fontWeight: 'bold', color:'blue', textShadow:'#63A2B0 10px 0 10px' }}>
            Máximo Preneste
            </Typography>
            <Box display='flex' justifyContent='center'>
            <Social/>
            </Box>
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
              <Grid container spacing={2}>
              {projects.map((project, index) => (
                <CardProject key={index} title={project.title} description={project.description} img={project.img} altImg={project.altImg} link={project.link} />
              ))}
              </Grid>
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
              <Typography variant='h2' align='center'>
                Experiencia
              </Typography>
              <Grid container spacing={2}>
              {expirience.map((exp, index) => (
                <CardExpirience key={index} title={exp.title} description={exp.description} img={exp.img} altImg={exp.altImg} />
              ))}
              </Grid>
            </Grid>
            <Grid size={{xs: 12, md: 12}}>
              <Typography variant='h2' align='center'>
                Habilidades
              </Typography>
              <SkillCarrusel/>
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
                En la facultad, aprindi Habilidades blandas, como trabajo en equipo, liderazgo, comunicación y resolución de conflictos.
                Además, la aplicacion de princpios SOLID, el pilar principal de mis proyectos.
              </Typography>
            </Grid>
          </Grid>
        </>
      )
}