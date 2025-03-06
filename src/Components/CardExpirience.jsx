import { Card, CardHeader, Typography,CardMedia, CardContent } from "@mui/material";
import Grid from '@mui/material/Grid2';

export default function CardExpirience({title, description, img, altImg}) {

    return(<>
        <Grid container spacing={2}>
            <Card>
                <CardHeader title={title}/>
                <CardMedia component="img" alt={altImg} image={img} title={title} />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        </>)
}