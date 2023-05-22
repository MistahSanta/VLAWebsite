import React from 'react'
import styled from "styled-components";
import logo from "..//assets/VLALogo.png"
import { hover } from '@testing-library/user-event/dist/hover';
/* CSS with styled components */
const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 769px) {
      width: 100%;

    }
`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 769px) {
      width: 100%;
      padding: 10px;
    }
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;


`
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 769px) {
      display: none;
    }
`

const ListItem = styled.li`
    position: relative;
    cursor: pointer;
    padding: 2% 0;
    &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(to right, #80ff80, #ff83e2);
    width: 0%;
    height: 4px;
    opacity: 0;

    }
    &:hover {
        opacity: 0.9;
        &::after{
            opacity: 1;
            animation: moveBar 0.2s linear both;

            @keyframes moveBar {
                to {
                    width: 100%;
                }
            }
        }
    }

`
const Logo = styled.img`
    height: 50px;
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Button = styled.button`
    padding: 10px;
    width: 100px;
    background-color: #ff83e2;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    border: none;
`



const Navbar = () => {
    const data = [
        "Events",
        "Team",
        "About us",
        "Contact",
    ]
  return (
    <Section>
        <Container>
            <Links>

                <Logo src= {logo} />
               
                <List>
                    {data.map( (item) => (
                        <ListItem key={item}>
                            {item}
                            
                        </ListItem>
                        
                    ))}

                </List>
                
            </Links>
            <Icons>
                <Button>Join Now</Button>
                
            </Icons>

        </Container>
        
    </Section>
    
  )
}

export default Navbar;
