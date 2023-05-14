import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const StyledButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

// const ResponsiveButton = styled(Button)(({ theme }) => ({
//     display: 'none',
//     [theme.breakpoints.down('sm')]: {
//         display: 'block',
//     },
// }));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '20px',
        height: 'auto',
    },
}));

const ResponsiveMenu = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '& .menu': {
        backgroundColor: '#f2f2f2',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        padding: '20px',
    },
}));


const MenuIconWrapper = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block',
    },
}));

const Header = () => {
    const [open, setOpen] = React.useState(false);

    const handleMenuClick = () => {
        setOpen(true);
    };

    // const handleCloseClick = () => {
    //     setOpen(false);
    // };

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Box>
                    <Typography variant="h6" sx={{flexGrow: 1}}>
                        TousPour1
                    </Typography>
                </Box>
                <Box sx={{display: {xs: 'none', sm: 'flex'}}}>
                    <StyledButton component={Link} to="/home" color="inherit">
                        Accueil
                    </StyledButton>
                    <StyledButton component={Link} to="/contenu" color="inherit">
                        Contenu
                    </StyledButton>
                    <StyledButton component={Link} to="/forum" color="inherit">
                        Forum
                    </StyledButton>
                    <StyledButton component={Link} to="/contact" color="inherit">
                        Contact
                    </StyledButton>
                </Box>
                <Box sx={{display: {xs: 'flex', sm: 'none'}}}>
                    <MenuIconWrapper onClick={handleMenuClick}>
                        <MenuIcon/>
                    </MenuIconWrapper>
                </Box>
                <Box sx={{display: {xs: 'flex', sm: 'none'}}}>
                    <ResponsiveMenu style={{display: open ? 'flex' : 'none'}}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <Typography variant="h6">
                                TousPour1
                            </Typography>
                        </Box>
                    </ResponsiveMenu>
                </Box>
            </StyledToolbar>
        </AppBar>
    );
};
export default Header;
