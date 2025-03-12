import { Card, CardHeader, Typography,CardMedia, CardContent, Button } from "@mui/material";
import CardActionArea from '@mui/material/CardActionArea';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Grid from '@mui/material/Grid2';
import ModalProject from "./ModalProject";
import { useState } from "react";

export default function CardProject({project}) {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
   return(<>

        <Grid container spacing={2}>
            <Card sx={{background: 'rgb(33, 49, 76)', color: 'white' ,'&:hover':{boxShadow: 'inset 0 5px 10px  #1630BE, 0 0 10px #1630BE'}}}>
                <CardActionArea onClick={handleOpen}>
                <CardHeader title={project.title}/>
                <CardMedia component="img" alt={`Imagen de ${project.title}`} image={project.img} sx={{
                    width: "100%",  // Ajusta el ancho al 100% del contenedor padre
                    maxWidth: "600px",  // Establece un ancho máximo para limitar el tamaño
                    height: "auto",  // Mantiene la proporción de la imagen
                    margin: "0 auto", // Centra horizontalmente
                    display: "block" 
                }} title={project.title} />
                </CardActionArea>
                <CardContent >
                    <Typography variant="body2"  component="p">
                        {project.description}
                    </Typography>
                    {project.link && <a href={project.link} target="_blank" ><Button><LanguageIcon/></Button></a>}
                    {project.github &&
                    <a href={project.github} target="_blank" ><Button><GitHubIcon/></Button></a>}
                    {/*Pagina del proyecto (links dinamicos)*/}
                </CardContent>
            </Card>
        </Grid>
        <ModalProject project={project} open={open} handleClose={handleClose}/>

    </>)
}

