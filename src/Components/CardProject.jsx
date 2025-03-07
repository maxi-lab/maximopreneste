import { Card, CardHeader, Typography,CardMedia, CardContent } from "@mui/material";
import Grid from '@mui/material/Grid2';


export default function CardProject({title, description, img, link}) {
    return(<>

        <Grid container spacing={2}>
            <Card>
                <CardHeader title={title}/>
                <CardMedia component="img" alt={`Imagen de ${title}`} image={img} title={title} />
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

