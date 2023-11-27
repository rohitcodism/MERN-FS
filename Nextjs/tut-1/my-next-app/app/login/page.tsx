'use client'

import { Button, Container, Link, Typography } from '@mui/material';
import React, { useState }  from 'react';
import { useRouter } from 'next/navigation';
import { Axios } from 'axios';

const LoginPage = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    })

    const onLogin = async () => { }

    return (
        <div className='flex justify-center items-center place-content-center text-lg'>
            <>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: '#fff',
                            mt: "8rem"
                        }}
                        variant='h4'
                    >
                        Log in
                    </Typography>
                    <hr />
                    <br />
                    <label
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <br />
                    <input
                        type="text"
                        // value={user.email}
                        // onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder='Email'
                        style={{
                            width: "40%",
                            padding: "0.5rem 1rem 0.5rem 1rem",
                            borderRadius: "25px"
                        }}
                    />                <br />
                    <label
                        htmlFor="username"
                    >
                        Password
                    </label>
                    <br />
                    <input
                        type="password"
                        // value={user.password}
                        // onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder='Enter your password'
                        style={{
                            width: "40%",
                            padding: "0.5rem 1rem 0.5rem 1rem",
                            borderRadius: "25px"
                        }}
                    />                <br />
                    {/* <label
                    htmlFor="username"
                >
                    Confirm Password
                </label>
                <br />
                <input
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder='Username'
                    style={{
                        width: "40%",
                    }}
                /> */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: "space-evenly",
                            width: "40%",
                        }}
                    >
                        <Button
                            variant='contained'
                            sx={{
                                mt: '1rem',
                                backgroundColor: '#01D28E',
                                borderRadius: "10px",
                                border: "2px solid #01D28E",
                                ":hover": {
                                    backgroundColor: "#01D28E"
                                }
                            }}
                        >
                            Log in
                        </Button>
                        <Button
                            variant='contained'
                            sx={{
                                mt: '1rem',
                                backgroundColor: '#01D28E',
                                borderRadius: "10px",
                                border: "2px solid #7568D9",
                                ":hover": {
                                    backgroundColor: "#7568D9"
                                }
                            }}
                        >
                            <Link style={{textDecoration : "none"}} href="/signup">Sign up</Link>
                        </Button>
                    </div>
                </Container>
            </>
        </div>
    )
}

export default LoginPage;