import { Box, Button, Divider, FormControl, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
export default function Footer() {
    return (
        <>
            <footer>
                <Divider sx={{border:'1px solid'}} />
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant='body2' align='center'>
                            2025. Maximo Preneste
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box display='flex' justifyContent='center'>
                        <Typography variant='h6' align='center'>
                            Contactame
                        </Typography>
                        <Divider orientation="vertical"variant="middle" flexItem sx={{border:'1px solid'}}/>
                        <FormControl>
                        <TextField
                        required
                        placeholder='Nombre y apellido'
                        variant='outlined'
                        />
                        <TextField
                        required
                        placeholder='Correo Electronico'
                        variant='outlined'
                        />
                        <TextField
                        required
                        placeholder='Mensaje'
                        variant='outlined'
                        multiline
                        rows={4}/>
                        <Button variant='contained' color='primary'>Enviar</Button>
                        </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </footer>
        </>
    )

}