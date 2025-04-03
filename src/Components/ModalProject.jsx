import { Box, Chip, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { languageContext } from "../Context/Language";
export default function ModalProject({project,open,handleClose}) {
    const lang=useContext(languageContext)
    return(<>
        <Modal open={open} onClose={handleClose}>
            <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, border: '2px solid #000', boxShadow: 24, p: 4,bgcolor:'#102c54'}}>
            <Typography variant="h2">{lang.locale=="es-AR"?project.title:project.t}</Typography>
            <img src={project.img} alt={lang.locale=="es-AR"?`Imagen de ${project.title}`:`Image of ${project.t}`} style={{width: "100%",  // Ajusta el ancho al 100% del contenedor padre
                maxWidth: "600px",  // Establece un ancho máximo para limitar el tamaño
                height: "auto",  // Mantiene la proporción de la imagen
                margin: "0 auto", // Centra horizontalmente
                display: "block"}}/>
            <Typography variant="body1">{lang.locale=="es-AR"?project.long:project.l}</Typography>
            {project.tecs.map((tec,index)=><Chip key={index} label={tec} style={{margin: "5px", color:'white'}}/>)}
            </Box>
        </Modal>
    
    </>)
}