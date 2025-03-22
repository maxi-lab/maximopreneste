import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(){
    return(
        <header>    
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar>
                         <Box sx={{flexGrow:1, display:{xs:'flex',md:'none'}}}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                >
                                <MenuIcon/>
                            </IconButton>
                        </Box>
                        <Box sx={{display:{xs:'flex',md:'none'},mr:1}}>
                            <Typography variant="h6" component="div" sx={{display:{xs:'flex',md:'none'}}} >
                                Máximo Preneste
                            </Typography>
                        </Box>
                        <Box sx={{display:{xs:'none',md:'flex'}}}>
                            <MenuItem>
                                <Typography variant="h6" component="a" href='#proyectos' sx={{color:'white'}}>
                                    Proyectos
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography variant="h6" component="a" href='#about' sx={{color:'white'}}>
                                    Sobre mi
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography variant="h6" component="a" href='#contacto' sx={{color:'white'}}>
                                    Contacto
                                </Typography>
                            </MenuItem>
                        </Box>
                    </Toolbar>

                </Container>
            </AppBar>

        </header>
    )
} 