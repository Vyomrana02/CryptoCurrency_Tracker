import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { CryptoState } from '../../CryptoContext';
import { auth } from '../../firebase';
import { Box, Button, TextField } from '@mui/material';

const SignUp = (handleClose) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const { setAlert } = CryptoState();

    const handleSubmit = async () => {
        if (password !== confirmpassword) {
          setAlert({
            open: true,
            message: "Passwords do not match",
            type: "error",
          });
          return;
        }
        try {
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
          );
          setAlert({
            open: true,
            message: `SignUp successful. Welcome ${result.user.email}`,
            type: "success",
          });
          //handleClose();
        }
        catch (error) {
          setAlert({
            open: true,
            message: error.message,
            type: "error",
          });
          return;
        }
    }

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
                type="email"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
            />

            <TextField
                id="outlined-basic"
                label="Enter password"
                variant="outlined"
                type="password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
            />

            <TextField
                id="outlined-basic"
                label="Confirm password"
                variant="outlined"
                type="password"
                value = {confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
            />

            <Button
                variant="contained"
                size="large"
                style={{
                backgroundColor: "#EEBC1D"
                }}
                onClick={handleSubmit}
            >
                Sign UP
            </Button>
        </Box>
    )
}

export default SignUp;