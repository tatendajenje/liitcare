import React from 'react'
import styled from 'styled-components'
import img from './../../../assets/5.jpg'
import img1 from './../../../assets/3.jpg'
import img2 from './../../../assets/4.jpg'

const Wrapper = styled.div`
width: 80%;
padding-top:50px;
margin:0 auto;


`

const H1 = styled.h1`
color:#f15f25;
font-size:2.5rem;
text-align:center;

`

const P = styled.p`
color:#7e7e7e;
font-size:1rem;
text-align:center;
padding-top:20px;
`

const Cards = styled.div`
display:flex;
gap:30px;
justify-content:space-between;
padding:80px 0;

`

const Card = styled.div`
width:400px;
height:500px;

`

const ImageContainer = styled.div`
width:400px;
height:400px;
border: 1px dashed black;
border-radius:20px;
padding:10px;

`

const Image = styled.img`
width:100%;
border-radius:20px;

`

const H3 = styled.h3`
color:#32355d;
text-align:center;
padding-top:20px;
`








const Services = () => {
  return (
    <div style={{backgroundColor:'#f5fbfb'}}> 
        <Wrapper>
            <H1> Our Services</H1>
            <P>
                LIIT CARE CONNECT INC is an online platform connecting parents and 
                families with childcare, <br/>tutor, curated products, services and learning
                opportunities for kids and teens, in the province of Alberta.
            </P>

            <Cards>
                <Card>
                    <ImageContainer>
                        <Image src={img} />
                    </ImageContainer>
                    <H3>Tutor</H3>
                </Card>

                <Card>
                    <ImageContainer>
                        <Image src={img1} />
                    </ImageContainer>
                    <H3>Babysitter</H3>
                </Card>

                <Card>
                    <ImageContainer>
                        <Image src={img2} />
                    </ImageContainer>
                    <H3>Dayhome</H3>
                </Card>
            </Cards>
        </Wrapper>
    </div>
  )
}

export default Services