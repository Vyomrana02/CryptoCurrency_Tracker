import React from 'react';
import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';
import UserSidebar from './Authentication/UserSidebar';

const useStyles = makeStyles(() => ({
    title: {
      flex: 1,
      cursor: "pointer",
    },
    logo: {
        maxWidth: 160,
        maxHeight: 50,
        cursor: "pointer",
    },
}))

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const {currency, setCurrency, user} = CryptoState();
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position='static'>
                <Container>
                <Toolbar>

                    <Typography onClick={() => navigate("/")} className={classes.title} varient='h6'>
                    <img src="/logo.png" alt = "logo" className={classes.logo} />
                    </Typography>

                    <Select 
                    variant="outlined"
                    style={{
                        width: 100,
                        height: 40,
                        marginRight: 15,
                    }}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    >
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"INR"}>INR</MenuItem>
                    <MenuItem value={"EUR"}>EUR</MenuItem>
                    <MenuItem value={"GBP"}>GBP</MenuItem>
                    <MenuItem value={"AUD"}>AUD</MenuItem>
                    </Select>
                    {user ? <UserSidebar/> :  <AuthModal />}
                </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header;