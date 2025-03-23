import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import useScroll from '../Hooks/useScroll';
import useMenu from '../Hooks/useMenu';
import Menu from '@mui/material/Menu';
export default function Header(){
    const scroll = useScroll();
    const {open,handleOpen}=useMenu();
    return(
        <header>    
            <AppBar  sx={{ position:scroll>40?'fixed':'static',backgroundColor: scroll>40?'transparent':'none',backdropFilter:scroll>40?'blur(10px)':'none',transition:'all 0.5s',borderRadius:'10px 10px 10px 10px', background:scroll>40?'none':'#101090'}}>
                <Container maxWidth='xl'>
                    <Toolbar>
                         <Box sx={{flexGrow:1, display:{xs:'flex',md:'none'}}}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                open={open}
                                onClick={handleOpen}>
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                            open={open}
                            onClose={handleOpen}
                            anchorOrigin={{
                                vertical: 'buttom',
                                horizontal: 'left',
                            }}
                              keepMounted
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                              sx={{ display: { xs: 'block', md: 'none' }}}>
                                <MenuItem onClick={handleOpen}>
                                    <Typography variant="h6" component="a" href='#proyectos'sx={{textDecoration:'none'}} color='black'  >
                                        Proyectos
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleOpen}>
                                    <Typography variant="h6" component="a" href='#about'sx={{textDecoration:'none'}} color='black' >
                                        Sobre mi
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleOpen}>
                                    <Typography variant="h6" component="a" href='#contacto' sx={{textDecoration:'none'}} color='black' >
                                        Contacto
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Box sx={{display:{xs:'flex',md:'none'},mr:1}}>
                            {scroll>40?<Typography variant="h6" component="a" href='#home' sx={{display:{xs:'flex',md:'none',textDecoration:'none'}}} color='white' >
                               MP
                            </Typography>:null}
                        </Box>
                        <Box sx={{display:{xs:'none',md:'flex'}}}>    
                            <MenuItem>
                                <Typography variant="h6" component="a" href='#proyectos' sx={{color:'white',textDecoration:'none'}}>
                                    Proyectos
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography variant="h6" component="a" href='#about' sx={{color:'white',textDecoration:'none'}}>
                                    Sobre mi
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography variant="h6" component="a" href='#contacto' sx={{color:'white',textDecoration:'none'}}>
                                    Contacto
                                </Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{display:{xs:'none',md:'flex'},left:'90%',position:'absolute',transform:'translateX(-50%)'}}>
                        {scroll>40?<Typography variant="h6" component="a" href='#home' sx={{display:{xs:'none',md:'flex',textDecoration:'none'}}} color='white' >
                           MP
                        </Typography>:null}
                        </Box>
                    </Toolbar>

                </Container>
            </AppBar>

        </header>
    )
} 