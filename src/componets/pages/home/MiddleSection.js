import React from 'react';
import styled from 'styled-components'
import img from './../../../assets/10.jpg'

const Wrapper = styled.div`
width: 100%;
height: 700px;
display:flex;
flex-direction: column;
background:url(${img});
background-size: cover;
align-items:center;
justify-content: center;


`

const H3 = styled.h3`
color:#f15f25;
font-size:1.25rem;
`

const H1 = styled.h1`
color:#fff;
font-size:5.25rem;
`

const P = styled.p`
color:grey;
font-size:1rem;
`

const MiddleSection = () => {
  return (
    <div>
        <Wrapper>
            <H3>Quick , easy and problem</H3>
            <H1>We take care</H1>
            <P>Lorem ipsum dolor sit am </P>
        </Wrapper>
    </div>
  )
}

export default MiddleSection