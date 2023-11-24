'use client'

import { Typography, Container, Button } from '@mui/material'
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Axios } from 'axios';

const SignUp = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    })

    const onSignUp = async () => { }

    return (
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
                    Sign Up
                </Typography>
                <hr />
                <br />
                <label
                    htmlFor="username"
                >
                    Username
                </label>
                <br />
                <input
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder='Username'
                    style={{
                        width: "40%",
                        padding: "0.5rem 1rem 0.5rem 1rem",
                        borderRadius : "25px"
                    }}
                />
                <br />
                <label
                    htmlFor="email"
                >
                    Email
                </label>
                <br />
                <input
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder='Email'
                    style={{
                        width: "40%",
                        padding: "0.5rem 1rem 0.5rem 1rem",
                        borderRadius : "25px"
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
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder='Enter your password'
                    style={{
                        width: "40%",
                        padding: "0.5rem 1rem 0.5rem 1rem",
                        borderRadius : "25px"
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
                        justifyContent : "space-evenly",
                        width: "40%",
                    }}
                >
                    <Button
                        variant='contained'
                        sx={{
                            mt: '1rem',
                            backgroundColor: '#01D28E',
                            borderRadius: "10px",
                            border : "2px solid #01D28E",
                            ":hover" : {
                                backgroundColor : "#01D28E"
                            }
                        }}
                    >
                        Sign up
                    </Button>
                    <Button
                        variant='contained'
                        sx={{
                            mt: '1rem',
                            backgroundColor: '#01D28E',
                            borderRadius: "10px",
                            border : "2px solid #7568D9",
                            ":hover" : {
                                backgroundColor : "#7568D9"
                            }
                        }}
                    >
                        <Link href="/login">Log in</Link>
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default SignUp