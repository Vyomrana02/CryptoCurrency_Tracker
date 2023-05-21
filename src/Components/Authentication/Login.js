import { Box, Button, TextField } from '@mui/material'
import {signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { CryptoState } from '../../CryptoContext';
import React from 'react'
import { auth } from '../../firebase';

const Login = (handleClose) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAlert } = CryptoState();

    const handleSubmit = async () => {
        if(!email | !password){
          setAlert({
            open:true,
            message: "Please fill all Fields",
            type:"error",
          });
          return;
        }
        try {
            const result = await signInWithEmailAndPassword( auth, email,password); 
            setAlert({
              open: true,
              message: `Login successful. Welcome ${result.user.email}`,
              type: "success",
            });
            // handleClose();
        }
        catch (error) {
            setAlert({
              open: true,
              message: error.message,
              type: "error",
            });
            return;
        }
    };  
    return (
        <Box
            p={3}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px"
            }}
        >
            <TextField 
                id="outlined-basic" 
                label="Enter email" 
                variant="outlined" 
                type= "email"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
            />
            
            <TextField 
                id="outlined-basic" 
                label="Enter password" 
                variant="outlined" 
                type= "password"
                value = {password}
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <Button 
                variant="contained"
                size="large"
                style={{
                backgroundColor:"#EEBC1D"
                }}
                onClick={handleSubmit}
            >
                Login
            </Button>
        </Box>
    )
}

export default Login;