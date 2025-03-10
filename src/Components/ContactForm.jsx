import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Divider, FormControl, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
export default function ContactForm() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const sendEmail = () => {
        console.log('nombre,email,mensaje');
       emailjs.send("service_p59t17o","template_tlmhay6",{
            nombre: nombre,
            cuerpo: mensaje,
            reply_to: email,
            },{publicKey:'Eh0_r8E4ooPEcDYZs'}).then((result) => {alert('Mensaje enviado con exito')})
        .catch((error) => {alert('Ocurrio un error al enviar el mensaje');
        console.log(error)
        }); 
    }
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
                        onChange={(e) => setNombre(e.target.value)}
                        />
                        <TextField
                        required
                        placeholder='Correo Electronico'
                        variant='outlined'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                        required
                        placeholder='Mensaje'
                        variant='outlined'
                        multiline
                        onChange={(e) => setMensaje(e.target.value)}
                        rows={4}/>
                        <Button variant='contained' color='primary' onClick={sendEmail}><SendIcon/></Button>
                        </FormControl>
                        </Box>
                    </Grid>
    </>)

}