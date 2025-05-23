import { Card, CardHeader,CardMedia  } from "@mui/material";
import Grid from '@mui/material/Grid2';
export default function CardSkill({title,img, altImg}) {
    return (<>
        <Grid container spacing={2}>
            <Card sx={{background: 'rgb(33, 49, 76)',color: 'white', textAlign: 'center', padding: '10px', borderRadius: '10px'}}>
                <CardHeader title={title} />
                <CardMedia component="img" alt={altImg} image={img} sx={{
                    width: "100%",  // Ajusta el ancho al 100% del contenedor padre
                    maxWidth: "50px",  // Establece un ancho máximo para limitar el tamaño
                    height: "auto",  // Mantiene la proporción de la imagen
                    margin: "0 auto", // Centra horizontalmente
                    display: "block" 
                }} title={title} />
            </Card>
        </Grid>
    </>)
}