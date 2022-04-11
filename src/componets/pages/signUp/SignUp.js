import React from 'react'
import styled from 'styled-components'
import img from './../../../assets/11.jpg'
import img1 from './../../../assets/logo.png'
import {Link}  from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Wrapper = styled.div`
width: 100%;
display:flex;

`

const LeftContainer = styled.div`
width: 25%;
padding:40px 30px;
background:url(${img});
height: 100vh;
background-size:cover;


`

const P = styled.p`
 color:#000;

`

const H1 = styled.h1`
padding-top:50px;
font-size: 2.5rem;
color:#fff;

`



const RightContainer = styled.div`
width: 75%;
display:flex;
flex-direction: column;



`


const TopBar = styled.div`
display: flex;
justify-content: flex-end;
padding:40px 30px;
`

const Ul = styled.ul`


`

const Li = styled.li`


`

const H3 = styled.h3`
padding:10px 0;
font-size: 1.5rem;
color:#000;

`


const SignUpDetails = styled.div`

display:flex;
flex-direction: column;
justify-content:center;
align-items:center


`

const LogoContainer = styled.div`
width:75px;
height:75px;
`

const Logo = styled.img`
width:100%;

`

const Form = styled.div`



`

const H2 = styled.h2`
padding:10px 0;
font-size: 1rem;
color:#000;


`

const Span = styled.span`
font-size: 1rem;
color:#f15f25;
font-weight:500;
cursor: pointer;


`
























const SignUp = () => {

    const [service, setService] = useState('');

    const handleChange = (event) => {
      setService(event.target.value);
    };
    return (
        <div>
            <Wrapper>
                <LeftContainer>
                    <P>Liit Care Connect</P>
                    <H1>Connecting parents and families with children</H1>
                </LeftContainer>

                <RightContainer>
                    <TopBar>
                        <Ul>
                         <Link to='/'>   <Li>Home</Li></Link>
                        </Ul>
                    </TopBar>

                    <SignUpDetails>
                        
                        <LogoContainer>
                            <Logo src={img1} />
                        </LogoContainer>

                        <H3>Sign up to Liit Care</H3>

                        <Form>
                            <Box style={{display: 'flex', gap:'20px', flexDirection:'column'}}
                                sx={{
                                    width: 350,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="First Name" id="fullWidth" />
                                <TextField fullWidth label="Last Name" id="fullWidth" />
                                <TextField fullWidth label="Email" id="fullWidth" />
                                <TextField fullWidth label="Password" id="fullWidth" />
                                <TextField fullWidth label="Confirm Password" id="fullWidth" />
                            </Box>

                            <H2>   <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the" /><Span>Term and Conditions</Span></H2>

                            <Box sx={{ width: 350 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Service</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={service}
                                label="Service"
                                onChange={handleChange}
                                >
                                <MenuItem   >Service Buyer</MenuItem>
                                <MenuItem >Service Provider</MenuItem>
                                
                                </Select>
                            </FormControl>
                            </Box>
                        </Form>

                        <Stack style={{padding:'20px 0'}} spacing={2} direction="row">
                        
                        <Button style={{width: '350px', height:'55px',background:"#f15f25"}} variant="contained">Sign Up</Button>
                        
                        </Stack>

                        <P>Have an account Already. <Span>Log in.</Span></P>

                    </SignUpDetails>
                </RightContainer>

            </Wrapper>
        </div>
    )
}

export default SignUp