import { Box,  Divider,  Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Social from './Social';
import ContactForm from './ContactForm';

export default function Footer() {
    return (
        <>
            <footer>
                <Divider sx={{border:'1px solid',margin:2}}  />
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }} >
                        <Typography variant='body2' align='center'>
                            2026. Maximo Preneste
                        </Typography>
                        <Box sx={{display:'flex',justifyContent:'center', margin:2}} >
                            <Social/>
                        </Box>
                    </Grid>
                    <ContactForm/>                    
                </Grid>
            </footer>
        </>
    )

}