import React from 'react'
import styled from 'styled-components'
import GroupIcon from '@mui/icons-material/Group';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShieldIcon from '@mui/icons-material/Shield';
import {Link} from 'react-router-dom'


const Wrapper = styled.div`
padding:100px 0;
width:80%;
margin:0 auto;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;


`

const H1 = styled.h1`
color:#f15f25;
font-size:2.5rem;
text-align:center;

`

const Cards = styled.div`
display:flex;
gap:30px;
justify-content:space-between;
padding:80px 0;

`

const Card = styled.div`
width:300px;
height:300px;
display:flex;
flex-direction:column;
align-items:center;
gap:20px;

`


const Icon = styled.div`
color:#f15f25;
width:75px;
height:75px;
border: 2px solid #f15f25;
border-radius:100px;
display:flex;
align-items:center;
justify-content:center;

`


const H3 = styled.h3`
color:#111;
`


const P = styled.p`
padding:0 15px;
text-align:center;

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




const HowItWorks = () => {
  return (
    <div>
        <Wrapper>
            <H1>How it Works</H1>
            <Cards>
                <Card>
                    <Icon>
                        <GroupIcon sx={{fontSize:50}}  />
                    </Icon>
                    <H3>Join the Network</H3>
                    <P>Lorem ipsum dolor sit amet, consectetur adip
                        default Lorem ipsum dolor sit amet, consectetur adip
                    </P>
                </Card>

                <Card>
                    <Icon>
                        <FactCheckIcon sx={{fontSize:50}}  />
                    </Icon>
                    <H3>Find or List Services</H3>
                    <P>Lorem ipsum dolor sit amet, consectetur adip
                        default Lorem ipsum dolor sit amet, consectetur adip
                    </P>
                </Card>

                <Card>
                    <Icon>
                        <DateRangeIcon sx={{fontSize:50}}  />
                    </Icon>
                    <H3>Look in a Date</H3>
                    <P>Lorem ipsum dolor sit amet, consectetur adip
                        default Lorem ipsum dolor sit amet, consectetur adip
                    </P>
                </Card>

                <Card>
                    <Icon>
                        <AccountBalanceWalletIcon sx={{fontSize:50}}  />
                    </Icon>
                    <H3>Pay</H3>
                    <P>Lorem ipsum dolor sit amet, consectetur adip
                        default Lorem ipsum dolor sit amet, consectetur adip
                    </P>
                </Card>

                <Card>
                    <Icon>
                        <ShieldIcon sx={{fontSize:50}}  />
                    </Icon>
                    <H3>Secure</H3>
                    <P>Lorem ipsum dolor sit amet, consectetur adip
                        default Lorem ipsum dolor sit amet, consectetur adip
                    </P>
                </Card>
            </Cards>

            <div>
               <Link to='/sign-up'> <Button>Sign Up for Free</Button></Link>
            </div>
        </Wrapper>
    </div>
  )
}

export default HowItWorks