import React from 'react'
import styled from 'styled-components'
import img from './../../../assets/2.jpg'


const Wrapper = styled.div`
width: 80%;
padding:50px 30px;
margin:50px auto;
gap:10px;
display:flex;
flex-direction: row;
justify-content:space-around;
background-color:#f6f6f6;
border-radius:20px;


`

const ContainerOne = styled.div`
width: 60%;
`
const ContainerTwo = styled.div`
width: 30%;

`

const Image = styled.img`
width: 100%;
border-radius:20px;`


const H2 = styled.h2`
font-size:2rem;
text-align:end;
`

const H3 = styled.h3`
text-align:end;
padding:10px;

`

const P = styled.p`
text-align:end;



`

const AdvertMessenger = () => {
  return (
    <div>
        <Wrapper>
            <ContainerOne>
                <H2>Adverntist Messenger</H2>
                <H3>Octerber 2021</H3>
                <P>Lorem ipsum dolor sit amet, consectetur,
                lorem ipsum dolor sit amet, consect
                curated products, services and learning
                opportunities for kids and teens, in the province of Alberta.
                Lorem ipsum dolor sit amet, consectetur,
                lorem ipsum dolor sit amet, consect
                curated products, services and learning
                opportunities for kids and teens, in the province of Alberta.
                
                </P>
            </ContainerOne>

            <ContainerTwo>
              <Image src={img}  />
            </ContainerTwo>
        </Wrapper>
    </div>
  )
}

export default AdvertMessenger