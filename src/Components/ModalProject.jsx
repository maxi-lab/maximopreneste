import { Box, Chip, Modal, Typography } from "@mui/material";

export default function ModalProject({project,open,handleClose}) {
    return(<>
        <Modal open={open} onClose={handleClose}>
            <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, border: '2px solid #000', boxShadow: 24, p: 4,bgcolor:'black'}}>
            <Typography variant="h2">{project.title}</Typography>
            <img src={project.img} alt={`Imagen de ${project.title}`} style={{width: "100%",  // Ajusta el ancho al 100% del contenedor padre
                maxWidth: "600px",  // Establece un ancho máximo para limitar el tamaño
                height: "auto",  // Mantiene la proporción de la imagen
                margin: "0 auto", // Centra horizontalmente
                display: "block"}}/>
            <Typography variant="body1">{project.long}</Typography>
            {project.tecs.map((tec,index)=><Chip key={index} label={tec} style={{margin: "5px", color:'white'}}/>)}
            </Box>
        </Modal>
    
    </>)
}