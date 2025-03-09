import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Divider, FormControl, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
export default function ContactForm() {
    return( <>
        <Grid size={{ xs: 12, md: 6 }}>
                        <Box display='flex' justifyContent='center'>
                        <Typography variant='h6' align='center' sx={{margin:'40px',alignContent:'center'}}>
                            Contactame
                        </Typography>
                        <Divider orientation="vertical"variant="middle" flexItem sx={{border:'1px solid'}}/>
                        <FormControl sx={{margin:'20px',alignContent:'center', bgcolor:'white',padding:'20px',borderRadius:'10px'}}>
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
                        <Button variant='contained' color='primary'><SendIcon/></Button>
                        </FormControl>
                        </Box>
                    </Grid>
    </>)

}