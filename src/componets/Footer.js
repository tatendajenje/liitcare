import React from 'react'
import styled from 'styled-components'
import img from './../assets/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Wrapper = styled.div`
width: 100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top:100px;

`

const Newsletter = styled.div`
width: 80%;
display:flex;
margin:0 auto;
padding:50px 0;
justify-content:center;


`

const Section = styled.div`
width: 40%;
display:flex;
flex-direction: column;






`



const H4 = styled.h4`

color:#fff;
`

const H1 = styled.h1`
font-size:2.5rem;
color:#f15f25;

`


const EmailSection = styled.div`

`

const Input = styled.input`
border:none;
width:400px;
padding:1rem 5px;
outline:none;
`

const Button = styled.button`
background-color:#f15f25;
padding:1rem 1.75rem;
color: #fff;
border:none;
cursor:pointer;
`

const Divider = styled.div`
width:80%;
border-bottom:1px solid #fff;
`

const BottomBar = styled.div`
width:80%;
display:flex;
gap:80px;
margin:0 auto;
padding:50px;

`

const Logo = styled.div`
width:10%;
display:flex;
flex-direction:column;
align-items:center;

`

const LogoContainer = styled.div`
width:100px;
`

const Image = styled.img`
width:100%;
`


const Icons = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:30px;
padding-top:20px;
color:#f15f25;
`

const NavLinks = styled.div`
display:flex;
gap:100px;
`

const Nav = styled.div`
padding:30px 0;
`

const H2 = styled.h2`
color:#f15f25;
padding-bottom:20px;


`

const P = styled.p`
color:#fff;
padding:5px 0px;


`


const CopyRight = styled.div`
width:100%;
background:rgba(0 , 0, 0, 0.1);
padding:30px 0;
`

const H6 = styled.h6`
color:#fff;
padding-bottom:20px;
font-size:1rem;
text-align:center;


`

const Span = styled.span`
color:#f15f25;
padding:0 3px;
`



const Footer = () => {
  return (
    <div style={{background:'#32355d'}}>
        <Wrapper>
            <Newsletter>
                <Section>
                    <H4>We like sharing freebies and dicsounts.</H4>
                    <H1>Sign Up for Newsletter.</H1>
                </Section>

                <Section>
                        <EmailSection>
                            <Input type="email" placeholder="Email"/>
                            <Button>Sign Up</Button>
                        </EmailSection>
                </Section>
            </Newsletter>
            <Divider></Divider>

            <BottomBar>
                <Logo>
                    <LogoContainer>
                        <Image src={img} />
                    </LogoContainer>

                    <Icons>
                        <InstagramIcon sx={{fontSize:30}}  />
                        <TwitterIcon sx={{fontSize:30}} />
                        <FacebookIcon sx={{fontSize:30}}  />
                    </Icons>
                </Logo>

                <NavLinks>
                    <Nav>
                        <H2>CHILDCARE</H2>
                        <P>Find a Babysitter</P>
                        <P>Find a Dayhome </P>
                        <P>List Your Services</P>
                    </Nav>

                    <Nav>
                        <H2>TUTORING</H2>
                        <P>Find a Tutor</P>
                        <P>List Your Services</P>
                    </Nav>

                    <Nav>
                        <H2>SHOP</H2>
                        <P>Coming Soon</P>
                    </Nav>

                    <Nav>
                        <H2>RESOURCES</H2>
                        <P>Events</P>
                    </Nav>

                    <Nav>
                        <H2>CUSTOMER RELATION</H2>
                        <P>Contact Us</P>
                        <P>FAQ </P>
                        <P>info@liitcare.com</P>
                    </Nav>
                </NavLinks>
            </BottomBar>

            <CopyRight>
                <H6>
                    <Span>LiiT Care Connect 2022. </Span>
                    All rights Reserved.
                    <Span> Terms of Use</Span>
                     and 
                    <Span>
                         Privacy Policy.
                    </Span>
                </H6>
            </CopyRight>
        </Wrapper>
    </div>
  )
}

export default Footer