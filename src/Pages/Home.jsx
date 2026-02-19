import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import CardProject from '../Components/CardProject';
import CardExpirience from '../Components/CardExpirience';
import { projects } from '../Data/projects';
import { expirience } from '../Data/expirience';
import Social from '../Components/Social';
import { Box } from '@mui/material';
import about from '../assets/img/about.jpg'
import geminiImage from '../assets/img/Gemini_Generated_Image_uvjo2huvjo2huvjo-removebg-preview.png'
import { FormattedMessage } from 'react-intl';
import SkillSection from '../Components/SkillSection';

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
            <Grid container spacing={2} alignItems='center'>
              <Grid size={{xs: 12, md: 8}}>
                <Typography variant='subtitle1' align='center' sx={{fontSize: '2.5rem',maxWidth:'900px',margin:'0 auto'}}>
                <FormattedMessage id='short.description'/>
                <br />
                <FormattedMessage id='short.description2'/>
                </Typography>
              </Grid>
              <Grid size={{xs: 12, md: 4}} display='flex' justifyContent='center' alignItems='center'>
                <Box component={'img'} src={about} alt="Maximo Preneste" sx={{maxWidth:'250px',height:'auto', borderRadius:"15px"}} />
              </Grid>
            </Grid>
            </Grid>
            <Grid size={{xs: 12, md: 12}} id="experiencia">
              <Typography variant='h2' align='center'>
                <FormattedMessage id='expirience'/>
              </Typography>
              <Grid container spacing={2}>
  {expirience.map((exp, index) => (
    <CardExpirience key={index} exp={exp} />
  ))}
</Grid>

            </Grid>
            <Grid size={{xs: 12, md: 12}} id="proyectos">
              <Typography variant='h2' align='center'>
              <FormattedMessage id='projects' defaultMessage={'Projects'}/>
              </Typography>

              <Grid container spacing={2}>
              {projects.map((project, index) => (
                <CardProject key={index} project={project} />
              ))}
              </Grid>
            </Grid>
            
            <Grid size={{xs: 12, md: 12}}>
              <Typography variant='h2' align='center'>
                <FormattedMessage id='skils'/>
              </Typography> 
              <SkillSection/>

            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid container spacing={4} alignItems="center" justifyContent="center">
  
  {/* Título */}
  <Grid item size={{ xs: 12 }}>
    <Typography variant='h2' align="center" id="about">
      <FormattedMessage id='about' />
    </Typography>
    <Typography variant='body1' sx={{ maxWidth: '800px', mx: 'auto', mt: 2, px: 2, textAlign: 'center' }}>
      <FormattedMessage id='about.paragraph1' />
    </Typography>
  </Grid>

  {/* Avatar + Texto lado a lado */}
  <Grid item size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
    <Box
      component={'img'}
      src={geminiImage}
      alt="Maximo Preneste animated"
      sx={{
        width: { xs: '180px', md: '260px' },
        height: 'auto',
        filter: 'drop-shadow(0px 10px 30px rgba(0, 120, 255, 0.3))',
        transition: 'transform 0.4s ease',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.03)',
        },
      }}
    />
  </Grid>

  <Grid item size={{ xs: 12, md: 7 }} sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography
      variant='body1'
      sx={{
  px: { xs: 2, md: 0 },
  lineHeight: 1.8,
  fontSize: { xs: '1rem', md: '1.1rem' },
  pl: 3,  // opcional: también podés sacar este padding si ya no hay barra
}}
    >
      <FormattedMessage id='about.paragraph2' />
    </Typography>
  </Grid>

</Grid>
            </Grid>
          </Grid>
        </>
      )
}