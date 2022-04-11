import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import img from './../../../assets/7.jpg'


const Wrapper = styled.div`
width: 100%;
height: 600px;
background:url(${img});
background-size: cover;
background-repeat:no-repeat;

`

const MainBlock = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
padding-top:100px;


`
const H2 = styled.h2`
font-size:3rem;
color: #fff;
text-align: center;
padding:100px 0;`

const Cards = styled.div`
padding:40px;
display:flex;
gap:30px;
align-items:center;
background-color:  rgba(236, 236, 236, 0.719);
border-radius:100px;

`


const Card = styled.div`
width:300px;
display:flex;
justify-content:space-between;
align-items:center;
border-radius:80px;
padding:20px;
&:hover{
    background-color:rgba(117, 117, 117, 0.137);
}
`

const SectionInput = styled.div`
`

const P = styled.p`
`



const Input = styled.input`
padding: 0.75rem 0 ;
background:none;
border: none;
outline: none;
font-size:0.95rem;

&:placeholder{
color:#7e7e7e;
}
`

const Icon = styled.div`
background:#32355d;
width:50px;
height:50px;
display:flex;
align-items: center;
justify-content: center;
border-radius:100px;
`

const Divider = styled.div`

width:30px;
height:30px;
border-right: 1px solid #7e7e7e;
`

















const Hero = () => {
  return (
    <div>
        <Wrapper>

        <H2>Contact Us</H2>
            <MainBlock>
               

            <Cards>
                <Card>
                    <SectionInput>
                        <P>Tutor</P>
                        <Input placeholder="Postal Code" type="text" />
                    </SectionInput>

                    <Icon>
                        <SearchIcon size={24} style={{color: "#fff"}} />
                    </Icon>
                   
                </Card>
                <Divider></Divider>

                <Card>
                    <SectionInput>
                        <P>Babysitter</P>
                        <Input placeholder="Postal Code" type="text" />
                    </SectionInput>

                    <Icon>
                        <SearchIcon size={24} style={{color: "#fff"}} />
                    </Icon>
                   
                </Card>

                <Divider></Divider>

                <Card>
                    <SectionInput>
                        <P>Dayhome</P>
                        <Input placeholder="Postal Code" type="text" />
                    </SectionInput>

                    <Icon>
                        <SearchIcon size={24} style={{color: "#fff"}} />
                    </Icon>

                </Card>
             
            </Cards>

            </MainBlock>
        </Wrapper>
    </div>
  )
}

export default Hero