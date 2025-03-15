"use client"
// import error from "../../assets/page-error.gif";
import { Box, TextField } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import { Button } from '@mui/joy';
import { useState } from 'react';

const ContactMe = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleBlur = () => {
        setIsTouched(true);
    };

    const isEmailValid = email.trim() !== '';
    const isNameValid = name.trim() !== '';

    return (
        <div id='contact' className='w-full px-[12%] scroll-mt-20 my-20 text-center'>
            <h4 className='text-center mb-2 text-lg'>Introduction</h4>
            <h2 className='text-center text-5xl'>Contact Me</h2>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '42rem',

                    margin: '0 auto',
                    gap: 2,
                }}
            >
                <Box className='grid grid-cols-2 gap-6 mt-10 mb-8'>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        sx={{ width: '100%' }}
                        onChange={handleNameChange}
                        onBlur={handleBlur}
                        error={isTouched && !isNameValid}
                        helperText={isTouched && !isNameValid ? "Name is required" : ""}
                        required
                    />
                    <TextField
                        id="email"
                        label="e-mail"
                        variant="outlined"
                        sx={{ width: '100%' }}
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleBlur}
                        error={isTouched && !isEmailValid}
                        helperText={isTouched && !isEmailValid ? "E-mail is required" : ""}
                    />
                    <Textarea
                        placeholder="Enter your message"
                        minRows={4}
                        maxRows={4}
                        sx={{ width: '100%', gridColumn: '1 / -1' }}
                    />
                    <Button content='center'
                        type='submit'
                        sx={{ mt: "0.5rem", width: '50%' }}

                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default ContactMe;