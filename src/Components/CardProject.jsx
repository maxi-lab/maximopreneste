import { Card, CardHeader, Typography,CardMedia, CardContent } from "@mui/material";
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid2';


export default function CardProject({title, description, img, link}) {
    return(<>

        <Grid container spacing={2}>
            <Card sx={{background: 'rgb(33, 49, 76)', color: 'white'}}>

                <CardHeader title={title}/>
                <CardMedia component="img" alt={`Imagen de ${title}`} image={img} sx={{
                    width: "100%",  // Ajusta el ancho al 100% del contenedor padre
                    maxWidth: "600px",  // Establece un ancho máximo para limitar el tamaño
                    height: "auto",  // Mantiene la proporción de la imagen
                    margin: "0 auto", // Centra horizontalmente
                    display: "block" 
                }} title={title} />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    {link && <a href={link} target="_blank" >Ver proyecto</a>}{/*Pagina del proyecto (links dinamicos)*/}
                </CardContent>
            </Card>
        </Grid>

    </>)
}

