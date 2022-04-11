import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
width: 80%;
padding:80px 0;
margin:0 auto;
display:flex;
flex-direction: column;
`


const H1 = styled.h1`
font-size:2.5rem;
color:#f15f25;
text-align : center;
`

const ServiceProvider = () => {
  return (
    <div > 
        <Wrapper>
        <H1>Your Service Provider</H1>

            
        </Wrapper>
    </div>
  )
}

export default ServiceProvider