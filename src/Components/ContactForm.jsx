import SendIcon from '@mui/icons-material/Send';
import { Box, Button, FormControl, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import useMail from '../Hooks/useMail';
import CircularProgress from '@mui/material/CircularProgress';
import { FormattedMessage } from 'react-intl';
export default function ContactForm() {
    const style ={
            '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: 'rgba(255,255,255,0.05)',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(99, 179, 255, 0.6)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#63b3ff',
                    boxShadow: '0 0 8px rgba(99, 179, 255, 0.5)',
                },
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255,255,255,0.2)',
            },
            '& .MuiInputLabel-root.Mui-focused': {
                color: '#63b3ff',
            },
            '& .MuiInputBase-input': {
                color: '#fff',
            },
            '& .MuiInputLabel-root': {
                color: 'rgba(255,255,255,0.7)',
            },
        }
        
    const {nombre,setNombre,email,setEmail,mensaje,setMensaje,loading,setLoading,sendEmail,error,snackbar,setSnackbar} = useMail();
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
               <FormControl sx={{
    width: '100%',
    maxWidth: 450,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    p: 4,
    borderRadius: 3,

    backgroundColor: '#0d1f4e',
    border: '1px solid rgba(99, 179, 255, 0.3)',
    boxShadow: '0 0 20px rgba(99, 179, 255, 0.15), 0 0 60px rgba(99, 179, 255, 0.05)',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
        boxShadow: '0 0 30px rgba(99, 179, 255, 0.3), 0 0 80px rgba(99, 179, 255, 0.1)',
    }
}}>
    <TextField
        required
        label={<FormattedMessage id='contact.label1'/>}
        variant='outlined'
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
        sx={style}
    />
    <TextField
        required
        label={<FormattedMessage id='contact.label2'/>}
        variant='outlined'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        sx={style}
    />
    <TextField
        required
        label={<FormattedMessage id='contact.label3'/>}
        variant='outlined'
        multiline
        rows={4}
        onChange={(e) => setMensaje(e.target.value)}
        value={mensaje}
        sx={style}
    />

    {loading
        ? <CircularProgress sx={{ alignSelf: 'center', color: '#63b3ff' }} />
        : <Button
            variant='contained'
            onClick={sendEmail}
            endIcon={<SendIcon/>}
            sx={{
                borderRadius: 2,
                py: 1.2,
                fontWeight: 'bold',
                backgroundColor: '#1a3a7e',
                border: '1px solid rgba(99, 179, 255, 0.4)',
                boxShadow: '0 0 12px rgba(99, 179, 255, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: '#1e4494',
                    boxShadow: '0 0 20px rgba(99, 179, 255, 0.6), 0 0 40px rgba(99, 179, 255, 0.2)',
                    transform: 'translateY(-2px)',
                },
            }}
          >
          </Button>
    }

    
</FormControl>         </Box>
                        
                    </Grid>
            </Grid>
            <Snackbar
            open={snackbar.open}
            autoHideDuration={4000}
            onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
        <Alert
            onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: '100%' }}
        >
        {snackbar.message && <FormattedMessage id={snackbar.message} />}
    </Alert>
</Snackbar>
    </>)

}