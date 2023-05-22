import React from 'react'
import "..//styles.css";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Frog from './Frog';

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Container = styled.div`
  width: 1400px;
  display:flex;
  justify-content: space-between;
`
const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
`
const List = styled.ul`
 list-style: none;
 display: flex;
 flex-direction: column;
 gap: 20px;
`
const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    left: 0;
    top: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  
  &:hover {
    &::after {
      animation: moveText 0.5s linear both; 

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`


const Right = styled.div`
  flex: 1;
`


export const Works = () => {
  return (
    <div className='Works-section'>

      <Container>
        <Left>
          <List>
            {data.map(item => (
              <ListItem key={item} text={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls autoRotate makeDefault/>
            <Frog />
          </Canvas>
          <div>This work is based on "Little Cute Frog Tin" (https://sketchfab.com/3d-models/little-cute-frog-tin-1d0d16aef9d749e2822b0d97c184f4eb) by Vie Dinh (https://sketchfab.com/yenvydinh2295) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</div>
        </Right>
      </Container>
    </div>
  )
}
