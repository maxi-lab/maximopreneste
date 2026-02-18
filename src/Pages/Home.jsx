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
import { FormattedMessage } from 'react-intl';

export default function Home() {
  return (
        <>
          <Grid container spacing={2}>
            <Grid size={{xs: 12, md: 12}} id='home'>
            <Typography variant="h1" align="center" sx={{fontWeight: 'bold', textShadow:'0 0 10px #63A2B0, 0 0 10px #63A2B0,0 0 30px #63A2B0,0 0 50px #63A2B0',fontSize:{xs:'60px',md:'100px'} }}>
            Máximo Preneste
            </Typography>
            <Typography variant='h2' align='center' sx={{fontSize: '2.5rem'}}>
            <FormattedMessage id='short.subtitle'/>
            </Typography>
            </Grid>

            <Grid size={{xs: 12, md: 12}}>
            <Box display='flex' justifyContent='center'>
            <Social/>
            
            </Box>
            </Grid>
            <Grid size={{xs: 12, md: 12}}>
            <Typography variant='subtitle1' align='center' sx={{fontSize: '2.5rem',maxWidth:'800px',margin:'0 auto'}}>
            <FormattedMessage id='short.description'/>
            </Typography>
            </Grid>
            <Grid size={{xs: 12, md: 6}} id="proyectos">
              <Typography variant='h2' align='center'>
              <FormattedMessage id='projects' defaultMessage={'Projects'}/>
              </Typography>
              <Grid container spacing={2}>
              {projects.map((project, index) => (
                <CardProject key={index} project={project} />
              ))}
              </Grid>
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
              <Typography variant='h2' align='center'>
                <FormattedMessage id='expirience'/>
              </Typography>
              <Grid container spacing={2}>
              {expirience.map((exp, index) => (
                <CardExpirience key={index} exp={exp} />
              ))}
              </Grid>
            </Grid>
            <Grid size={{xs: 12, md: 12}}>
              <Typography variant='h2' align='center'>
                <FormattedMessage id='skils'/>
              </Typography>
              <SkillCarrusel/>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
            <Grid item size={{xs: 12, md: 12}}>
              <Typography variant='h2' align="center" id="about">
              <FormattedMessage id='about' />
              </Typography>
              <Typography variant='body1' margin={2}>
                <FormattedMessage id='about.paragraph1'/>
              </Typography>
              
              </Grid>
              <Grid item size={{xs:12,md:4}}  alignItems={'center'}>
              <Box component={'img'} src={about} alt="Foto de Máximo Preneste" sx={{maxWidth:"200px",height:'auto',position:'relative',left:20}} />
              </Grid>
              <Grid item size={{xs:12,md:8}}>
              <Typography variant='body1'  sx={{position:'relative'}} >
                <FormattedMessage id='about.paragraph2'/>
              </Typography>
              </Grid>
              </Grid>
            
            </Grid>
          
        </>
      )
}