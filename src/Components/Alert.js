import { Snackbar } from '@mui/material';
import React from 'react'
import MuiAlert from '@mui/material/Alert'
import { CryptoState } from '../CryptoContext'

const Alert = () => {
    const {alert,setAlert} = CryptoState();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert({open:false});
    };

    return (
        <div>
            <Snackbar 
                open={alert.open} 
                autoHideDuration={3000} 
                onClose={handleClose}
            >
                <MuiAlert 
                    onClose={handleClose} 
                    elevation={10} 
                    variant="filled" 
                    severity={alert.type}
                >
                    {alert.message}
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default Alert;