import { Card, CardHeader, Typography,CardMedia, CardContent } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useContext } from "react";
import {languageContext} from '../Context/Language'
export default function CardExpirience({exp}) {
    const lang=useContext(languageContext)
    return(<>
        <Grid container spacing={2}>
            <Card sx={{background: 'rgb(38, 68, 94)',
                 color: 'white',
                 borderRadius:'10px',
                 '&:hover':{boxShadow: 'inset 0 0 10px  #1630BE, 0 0 10px #1630BE'}}}>
                <CardHeader title={lang.locale=="es-AR"?exp.title:exp.t}/>
                <CardMedia component="img" alt={lang.locale=="es-AR"?exp.altImg:exp.alternative} image={exp.img} sx={{
                    width: "100%",  // Ajusta el ancho al 100% del contenedor padre
                    maxWidth: "300px",  // Establece un ancho máximo para limitar el tamaño
                    height: "auto",  // Mantiene la proporción de la imagen
                    margin: "0 auto", // Centra horizontalmente
                    display: "block" 
                }} title={lang.locale=="es-AR"?exp.altImg:exp.alternative} />
                <CardContent>
                    <Typography variant="body2" component="p">
                        {lang.locale=="es-AR"?exp.description:exp.desc}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        </>)
}