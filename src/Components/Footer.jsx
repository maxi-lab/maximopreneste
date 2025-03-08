import { Box, Button, Divider, FormControl, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer() {
    return (
        <>
            <footer>
                <Divider sx={{border:'1px solid'}} />
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant='body2' align='center'>
                            2025. Maximo Preneste
                            <Box>
                            <a href="https://www.linkedin.com/in/máximo-preneste-8549a9229" target='_blanck' ><LinkedInIcon sx={{fontSize:50, color:'black', margin:3,"&:hover":{
                                 transform:'scale(1.25)',
                            } }}/></a>
                            <a href="https://github.com/maxi-lab" target='_blanck'><GitHubIcon sx={{fontSize:50, color:'black', margin:3, "&:hover":{
                                 transform:'scale(1.25)',
                            }}}/></a>
                            </Box>
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