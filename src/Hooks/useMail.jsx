import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { languageContext } from '../Context/Language';
export default function useMail() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' });

    const sendEmail = () => {
        if(!nombre  || !email  || !mensaje){
            setError('contact.error.empty');
            setSnackbar({ open: true, severity: 'error', message: 'contact.error.empty' });
            return;
        }
        setLoading(true);
        console.log('nombre,email,mensaje');
       emailjs.send("service_p59t17o","template_tlmhay6",{
            nombre: nombre,
            cuerpo: mensaje,
            reply_to: email,
            },{publicKey:'Eh0_r8E4ooPEcDYZs'}).then((result) => {
                setLoading(false);
                setNombre('');
                setEmail('');
                setMensaje('');
                setError(null);
                 setSnackbar({ open: true, severity: 'success', message: 'contact.success' });
            })
        .catch((error) => {
            setError('contact.error.send'); 
            setLoading(false);
             setSnackbar({ open: true, severity: 'error', message: 'contact.error.send' });
        }); 
    }
    return {nombre,setNombre,email,setEmail,mensaje,setMensaje,loading,setLoading,sendEmail,error,snackbar,setSnackbar};
}