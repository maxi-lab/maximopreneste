import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import {Box} from '@mui/material';
import cv from '../assets/CV.pdf'
export default function Social() {
    return(
        <>
        <a href="https://www.linkedin.com/in/máximo-preneste-8549a9229" target='_blanck' ><LinkedInIcon sx={{fontSize:50, color:'white', margin:3,"&:hover":{
        transform:'scale(1.25)',color:'#5687c0'} }}/></a>
        <a href="https://github.com/maxi-lab" target='_blanck'><GitHubIcon sx={{fontSize:50, color:'white', margin:3, "&:hover":{
        transform:'scale(1.25)',color:'#5687c0'}}}/></a>
        <Box 
        sx={{
            display: "flex",
            justifyContent: "center", // Centra horizontalmente
            alignItems: "center", 
            }}>
        <Button variant='outlined'
        component='a'
        href={cv}
        target='_blank'
        download='Maximo_Preneste_CV.pdf'
        size='small' sx={{
            height:'50px',
            borderRadius:'20%',
            '&:hover':{
                boxShadow:'inset 0 0 5px  #4fde3c,0 0 5px  #4fde3c',
            }
        }}>CV <DownloadIcon/></Button>
        </Box>
        </>
    )
}