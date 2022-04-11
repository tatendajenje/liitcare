import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Wrapper = styled.div`
width: 80%;
padding:80px 0;
margin:0 auto;
display:flex;
justify-content:space-between;
`

const Section = styled.div`
width: 40%;
display: flex;
flex-direction:column;


`


const Container = styled.div`
display:flex;
padding:10px 0;
gap:30px;
`

const H1 = styled.h1`
font-size:2.5rem;
color:#f15f25;
padding:30px 0px;
`

const P = styled.p`
font-size:1rem;
color:#7e7e7e;
display:flex;
align-items:center;
gap:20px;
padding:10px 0;

span{
    align-items: center;
    color:#f15f25;
}
`


const ContactDetails = styled.div`

`

const Button = styled.button`
padding:0.75rem 1.175rem;
color: #fff;
background:#32355d;
font-size:1rem;
font-family:"Inter", 'san-serif';
border:none;
border-radius:50px;
cursor:pointer;

`







export const ContactUsDetails = () => {
  return (
    <div>
        <Wrapper>
            <Section>
                <H1>Quickly inquiry</H1>
                <Container>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                    >
                <TextField fullWidth id="fullWidth" label="First Name"  />

                </Box>

                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                    >
                <TextField fullWidth id="fullWidth" label="Last Name"  />

                </Box>
                
                </Container>

                <Container>

                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                    >
                <TextField fullWidth id="fullWidth" label="Email"  />

                </Box>

                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                    >
                <TextField fullWidth id="fullWidth" label="Phone Number"  />

                </Box>
                
                
                </Container>

                <Container>
                <Box
                     
                    sx={{
                            width: 620,
                            maxWidth: '100%',
                            

                        }}
                        >
                    <TextField  fullHeight fullWidth id="fullWidth" label="Message"  />
                </Box>
                </Container>

                <Container>
                    <Button>Send Message</Button>
                </Container>
                
            </Section>

            <Section>
                <H1>Get in touch</H1>
                <P>Lorem ipsum dolor sit amet, consectetur adip</P>
                <ContactDetails>
                    <P>  <PhoneIcon  /> <span>658 463 583</span></P>
                    <P>  <EmailIcon  /> <span>info@liitcare.com</span></P>
                    <P>  <LocationOnIcon  /> <span>Location</span></P>
                    
                </ContactDetails>
            </Section>
        </Wrapper>
    </div>
  )
}
