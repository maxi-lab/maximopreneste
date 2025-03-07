import { Card, CardHeader,CardMedia  } from "@mui/material";
import Grid from '@mui/material/Grid2';
export default function CardSkill({title,img, altImg}) {
    return (<>
        <Grid container spacing={2}>
            <Card>
                <CardHeader title={title}/>
                <CardMedia component="img" alt={altImg} image={img} title={title} />
            </Card>
        </Grid>
    </>)
}