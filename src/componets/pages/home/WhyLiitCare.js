import React from 'react'
import styled from 'styled-components'
import img from './../../../assets/2.jpg'

const Wrapper = styled.div`
width: 80%;
padding:80px 0;
margin:0 auto;
display:flex;
justify-content:space-between;
`

const Section = styled.div`
width: 40%;
display:flex;

justify-content: center;
flex-direction:column;

`

const ImageContainer = styled.div`
padding:20px;
border:1px  dashed black;



`

const Image = styled.img`
width: 100%;

`

const H1 = styled.h1`
font-size:2.5rem;
color:#f15f25;
`

const P = styled.p`
font-size:1.15rem;
color:#f15f25;
`



const WhyLiitCare = () => {
  return (
    <div style={{backgroundColor:'#32355d'}}> 
        <Wrapper>
            <Section>
                <ImageContainer>
                    <Image src={img} />
                </ImageContainer>
            </Section>

            <Section>
                <H1>Why Liit Care Connect</H1>
                <P>Be part of the community<br/>
                Join the  Liit Care Connect family and sort <br/>
                connecting. It's free, convenient and safe! </P>
            </Section>
        </Wrapper>
    </div>
  )
}

export default WhyLiitCare