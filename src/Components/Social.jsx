import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Social() {
    return(
        <>
        <a href="https://www.linkedin.com/in/máximo-preneste-8549a9229" target='_blanck' ><LinkedInIcon sx={{fontSize:50, color:'white', margin:3,"&:hover":{
        transform:'scale(1.25)',color:'#5687c0'} }}/></a>
        <a href="https://github.com/maxi-lab" target='_blanck'><GitHubIcon sx={{fontSize:50, color:'white', margin:3, "&:hover":{
        transform:'scale(1.25)',color:'#5687c0'}}}/></a>

        </>
    )
}