import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import CardProject from '../Components/CardProject';
import CardExpirience from '../Components/CardExpirience';
import SkillCarrusel from '../Components/SkillCarrusel';
import { projects } from '../Data/projects';
import { expirience } from '../Data/expirience';
import Social from '../Components/Social';
import { Box } from '@mui/material';
import about from '../assets/img/about.jpg'

export default function Home() {
  return (
        <>
          <Grid container spacing={2}>
            <Grid size={{xs: 6, md: 12}}>
            <Typography variant="h1" align="center" sx={{fontWeight: 'bold', textShadow:'0 0 10px #63A2B0, 0 0 15px #63A2B0,0 0 30px #63A2B0,0 0 50px #63A2B0' }}>
            Máximo Preneste
            </Typography>
            </Grid>
            <Grid size={{xs: 12, md: 12}}>
            <Box display='flex' justifyContent='center'>
            <Social/>
            
            </Box>
            </Grid>
            <Grid size={{xs: 12, md: 12}}>
            <Typography variant='subtitle1' align='center' sx={{fontSize: '2.5rem'}}>
            Un estudiante de Ingeniería en Sistemas apasionado por el desarrollo web.
            </Typography>
            </Grid>
            <Grid size={{xs: 12, md: 6}} id="proyectos">
              <Typography variant='h2' align='center'>
                Proyectos
              </Typography>
              <Grid container spacing={2}>
              {projects.map((project, index) => (
                <CardProject key={index} project={project} />
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
            <Grid container alignItems="center" spacing={2}>
            <Grid item size={{xs: 12, md: 12}}>
              <Typography variant='h2' align="center" id="about">
                Sobre mi
              </Typography>
              <Typography variant='body1' margin={2}>
                Analizo el problema teniendo en cuenta la accesibilidad, usabilidad y experiencia de usuario.
                Me gusta trabajar en equipo y aprender de los demás.
                Siempre estoy dispuesto a ayudar a los demás y a compartir mis conocimientos.
                Me gusta aprender cosas nuevas y estar en constante evolución.
              </Typography>
              
              </Grid>
              <Grid item size={{xs:12,md:4}}  alignItems={'center'}>
              <Box component={'img'} src={about} alt="Foto de Máximo Preneste" sx={{maxWidth:"200px",height:'auto',position:'relative',left:20}} />
              </Grid>
              <Grid item size={{xs:12,md:8}}>
              <Typography variant='body1'  sx={{position:'relative'}} >
                Soy estudiante de Ingeniería en Sistemas en la Universidad Tecnologica Nacional Facultad Regional La Plata.
                En la facultad, aprindí habilidades blandas, como trabajo en equipo, liderazgo, comunicación y resolución de conflictos.
                Además, la aplicacion de princpios SOLID, el pilar principal de mis proyectos.
              </Typography>
              </Grid>
              </Grid>
            
            </Grid>
          
        </>
      )
}