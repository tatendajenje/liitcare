import React from 'react'
import styled from 'styled-components'
import img from './../../../assets/1.jpg'
import img1 from './../../../assets/7.jpg'
import img2 from './../../../assets/6.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';



const Wrapper = styled.div`
width: 80%;
padding:100px 0;
margin:0 auto;
gap:10px


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

const CardTeam = styled.div`
width:500px;
height:300px;

`

const ImageContainerAbout = styled.div`
width:90%;
border-radius:20px;
padding:10px;

`

const Image = styled.img`
width:100%;
border-radius:20px;

`

const H3 = styled.h3`
color:#f15f25;
text-align:center;
`

const Icons = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:30px;
padding-top:20px;
`







const MeetTeam = () => {
  return (
    
    <div style={{backgroundColor:'#fff', padding:'80px'}}> 
        <Wrapper>
            <H1> Meet the Team</H1>
            <P>
                LIIT CARE CONNECT INC is an online platform connecting parents and 
                families with childcare, <br/>tutor, curated products, services and learning
                opportunities for kids and teens, in the province of Alberta.
            </P>

            <Cards>
                <CardTeam>

                    <ImageContainerAbout>
                        <Image src={img} />
                    </ImageContainerAbout>

                    <H3>Authur</H3>
                    <P style={{padding:"10px 80px"}}>Lorem ipsum dd frav learning  services and learning
                opportunities for kids and teens, in the province of Alberta.</P>

                    <Icons>
                        <InstagramIcon sx={{fontSize:30}}  />
                        <TwitterIcon sx={{fontSize:30}} />
                        <FacebookIcon sx={{fontSize:30}}  />
                    </Icons>
                </CardTeam>

                <CardTeam>
                    <ImageContainerAbout>
                        <Image src={img1} />
                    </ImageContainerAbout>
                    <H3>Magret</H3>
                    <P style={{padding:"10px 80px"}}>Lorem ipsum dd frav learning  services and learning
                opportunities for kids and teens, in the province of Alberta.</P>

                    <Icons>
                        <InstagramIcon sx={{fontSize:30}}  />
                        <TwitterIcon sx={{fontSize:30}} />
                        <FacebookIcon sx={{fontSize:30}}  />
                    </Icons>
                </CardTeam>

                <CardTeam>
                    <ImageContainerAbout>
                        <Image src={img2} />
                    </ImageContainerAbout>
                    <H3>Patricia</H3>
                    <P style={{padding:"10px 80px"}}>Lorem ipsum dd frav learning  services and learning
                opportunities for kids and teens, in the province of Alberta.</P>

                    <Icons>
                        <InstagramIcon sx={{fontSize:30}}  />
                        <TwitterIcon sx={{fontSize:30}} />
                        <FacebookIcon sx={{fontSize:30}}  />
                    </Icons>
                </CardTeam>
            </Cards>
        </Wrapper>
    </div>
  )
}

export default MeetTeam