import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Divider, FormControl, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import useMail from '../Hooks/useMail';
import CircularProgress from '@mui/material/CircularProgress';
import { FormattedMessage } from 'react-intl';
export default function ContactForm() {
    const {nombre,setNombre,email,setEmail,mensaje,setMensaje,loading,setLoading,sendEmail,error} = useMail();
    return( <>
        <Grid container >
        <Grid size={{ xs: 12, md: 6 }} id='contacto'>
            <Box display='flex' justifyContent='center' >
            <Typography variant='h6' align='center' sx={{margin:'40px',alignContent:'center'}}>
            <FormattedMessage id='contact'/>
            </Typography>
            </Box>
        </Grid>
        <Grid size ={{xs:12,md:6}}>
                <Box display='flex' justifyContent='center'>
                <FormControl sx={{margin:'20px',alignContent:'center', bgcolor:'white',padding:'20px',borderRadius:'10px',width:350}}>
                        <TextField
                        required
                        label={<FormattedMessage id='contact.label1'/>}
                        variant='outlined'
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                        />
                        <TextField
                        required
                        label={<FormattedMessage id='contact.label2'/>}
                        variant='outlined'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                        <TextField
                        required
                        label={<FormattedMessage id='contact.label3'/>}
                        variant='outlined'
                        multiline
                        onChange={(e) => setMensaje(e.target.value)}
                        value={mensaje}
                        rows={4}/>
                        {loading ? <CircularProgress/> : <Button variant='contained' color='primary' onClick={sendEmail}><SendIcon/></Button>}
                        </FormControl>
                        </Box>
                        {error&&<Typography variant='h6 ' color='red' align='center'><FormattedMessage id={error}/></Typography>}
                    </Grid>
            </Grid>
    </>)

}