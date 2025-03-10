import { Card, CardHeader, Typography,CardMedia, CardContent } from "@mui/material";
import Grid from '@mui/material/Grid2';

export default function CardExpirience({title, description, img, altImg}) {

    return(<>
        <Grid container spacing={2}>
            <Card sx={{background: 'rgb(38, 68, 94)', color: 'white','&:hover':{boxShadow: '#1630BE 10px 0 10px '}}}>
                <CardHeader title={title}/>
                <CardMedia component="img" alt={altImg} image={img} sx={{
                    width: "100%",  // Ajusta el ancho al 100% del contenedor padre
                    maxWidth: "300px",  // Establece un ancho máximo para limitar el tamaño
                    height: "auto",  // Mantiene la proporción de la imagen
                    margin: "0 auto", // Centra horizontalmente
                    display: "block" 
                }} title={altImg} />
                <CardContent>
                    <Typography variant="body2" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        </>)
}