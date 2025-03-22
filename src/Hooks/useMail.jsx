import { useState } from 'react';
import emailjs from '@emailjs/browser';
export default function useMail() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [loading, setLoading] = useState(false);
    const sendEmail = () => {
        if(nombre === '' || email === '' || mensaje === ''){
            alert('Por favor complete todos los campos');
            return;
        }
        setLoading(true);
        console.log('nombre,email,mensaje');
       emailjs.send("service_p59t17o","template_tlmhay6",{
            nombre: nombre,
            cuerpo: mensaje,
            reply_to: email,
            },{publicKey:'Eh0_r8E4ooPEcDYZs'}).then((result) => {
                alert('Mensaje enviado con exito')
                setLoading(false);
                setNombre('');
                setEmail('');
                setMensaje('');
            })
        .catch((error) => {
            alert('Ocurrio un error al enviar el mensaje');
        }); 
    }
    return {nombre,setNombre,email,setEmail,mensaje,setMensaje,loading,setLoading,sendEmail};
}