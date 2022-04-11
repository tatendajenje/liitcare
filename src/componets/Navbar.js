import React from 'react'
import styled from 'styled-components'
import img from './../assets/logo.png'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


const Wrapper = styled.div`
`


const Topbar = styled.div`
background-color:#32355d;
width: 100%;
height:75px;
display:flex;
justify-content: center;
align-items: center;

`
const P = styled.p`
color: #fff;
text-align: center;`

const Sticky = styled.div`

`

const NavLinks = styled.div`
width:80%;
margin: 10px auto;
display:flex;
align-items: center;
justify-content:space-between;
gap:50px;
position: sticky;
top: 0;
background-color: #fff;
  

`

const LogoContainer = styled.div`
width:100px
`

const Logo = styled.img`
width:100%;

`

const Links = styled.div`

`
const Ul = styled.ul`
display:flex;
`

const Li = styled.li`
color: #32355d;
padding:0 20px;
cursor: pointer;

`





const RightContainer = styled.div`
display:flex;
align-items: center;
gap:5px;


`

const ButtonO = styled.button`
padding:0.75rem 1.175rem;
color: #32355d;
background:none;
font-size:1rem;
font-family:"Inter", 'san-serif';
border:none;
border-radius:50px;

&:hover{
background-color:#32355d;
color: #fff;
}
`

const MenuContainer = styled.div`

`

const Icons = styled.div`
display:flex;
align-items:center;
padding:5px;
gap:5px;
border: 1px #111111 !important;
border-radius:50px;

`




const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorElOne, setAnchorElOne] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorElOne(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorElOne(null);
  };
  const openOne = Boolean(anchorElOne);
  
    return (
        <div>
            <Wrapper>

                <Topbar>
                    <P>Get the latest on our COVID-19 response.</P>
                </Topbar>
                <Sticky>
                <NavLinks>
                    <LogoContainer>
                        <Logo src={img} />
                    </LogoContainer>

                    <Links>
                        <Ul>
                          <Link to={'/'}>  <Li>Home</Li></Link>
                           <Link  to={'/about-us'}> <Li>About Us</Li></Link>
                           <Link  to={'/contact-us'}> <Li>Contact Us</Li></Link>
                            <Link  to={'/book-a-service'}><Li>Book a Service</Li></Link>
                        </Ul>
                    </Links>

                    <RightContainer>
                       <Link to={'/list-of-services'}> <ButtonO>List of services</ButtonO></Link>
                       

                        <Typography
                                aria-owns={openOne ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}
                            >
                            <LocalPhoneIcon size="small" style={{color:"#32355d"}} /> 
                            </Typography>
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                pointerEvents: 'none',
                                }}
                                open={openOne}
                                anchorEl={anchorElOne}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                onClose={handlePopoverClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ p: 1 }}>123 - 456</Typography>
                            </Popover>

                        <MenuContainer>
                            <div>
                                <Button style={{border: '1px solid #7e7e7e', borderRadius: '50px'}}
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <Icons>
                                    <MenuIcon size="small" style={{color:"#32355d"}} />
                                    <AccountCircleIcon size="small" style={{color:"#32355d"}} />
                                    </Icons>
                                </Button>
                                <Menu 
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    <MenuItem onClick={handleClose}>Help</MenuItem>
                                </Menu>
                            </div>
                        </MenuContainer>
                    </RightContainer>

                </NavLinks>

                </Sticky>
               

            </Wrapper>
        </div>
    )
}

export default Navbar


