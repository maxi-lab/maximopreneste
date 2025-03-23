import { useState } from 'react';
import emailjs from '@emailjs/browser';
export default function useMail() {
    const [nombre, setNombre] = useState(null);
    const [email, setEmail] = useState(null);
    const [mensaje, setMensaje] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendEmail = () => {
        if(!nombre  || !email  || !mensaje){
            setError('Por favor complete todos los campos');
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
            })
        .catch((error) => {
            setError('Ocurrio un error al enviar el mensaje');
            setLoading(false)
        }); 
    }
    return {nombre,setNombre,email,setEmail,mensaje,setMensaje,loading,setLoading,sendEmail,error};
}