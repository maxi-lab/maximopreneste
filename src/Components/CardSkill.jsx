import { Card, CardHeader,CardMedia  } from "@mui/material";
import Grid from '@mui/material/Grid2';
export default function CardSkill({title,img, altImg}) {
    return (<>
        <Grid container spacing={2} justifyContent="center">
            <Card sx={{ width: 120,
        height: 120,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111c2e",
        borderRadius: 3,
         color: "white", 
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },}} elevation={3}>
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