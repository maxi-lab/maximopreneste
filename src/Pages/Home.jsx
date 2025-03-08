import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import CardProject from '../Components/CardProject';
import CardExpirience from '../Components/CardExpirience';
import CardSkill from '../Components/CardSkill';
import { skills } from '../Data/skills';
import { projects } from '../Data/projects';
import { expirience } from '../Data/expirience';
import Slider from "react-slick";


export default function Home() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
              {projects.map((project, index) => (
                <CardProject key={index} title={project.title} description={project.description} img={project.img} altImg={project.altImg} link={project.link} />
              ))}
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
              <Typography variant='h2' align='center'>
                Experiencia
              </Typography>
              {expirience.map((exp, index) => (
                <CardExpirience key={index} title={exp.title} description={exp.description} img={exp.img} altImg={exp.altImg} />
              ))}
            </Grid>
            <Grid size={{xs: 12, md: 12}}>
              <Typography variant='h2' align='center'>
                Habilidades
              </Typography>
              <Slider {...settings}>              
              {skills.map((skill, index) => (                
                <CardSkill key={index} title={skill.title} img={skill.img} alt={skill.alt} />
              ))}
              </Slider>
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