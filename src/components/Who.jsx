import React from 'react'
import "..//styles.css";
import styled from "styled-components";
import {
  OrbitControls,
} from "@react-three/drei";
import { Cube } from "./Cube";
import { Canvas } from "@react-three/fiber";



const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
  flex: 1;


`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:20px;

    
   

 
`
const Title = styled.h1`
   font-size: 74px;
   
`
const Line = styled.img`
   height: 5px;
`
const WhatWeDo = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`
const Subtitle = styled.h2`
   color: #da4ea2
`
const Desc = styled.div`
   font-size: 24px;
   color: lightgray
`
const Button = styled.button`
   background-color: #da3ea2;
   color: white;
   font-weight: 500;
   width: 120px;
   padding: 10px;
   border-radius: 5px;
   cursor: pointer;
   border: none;
`



export const Who = () => {
  return (
    <div className='Who-section'>
        <Container>
            <Left>
            <Canvas camera={{fov:25, position:[5,5,5]}}>
              <OrbitControls enableZoom={false} autoRotate/>
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
            </Canvas>
                
            </Left>
            <Right>
                <Title>Think outside the square space</Title>
                <WhatWeDo>
                    <Line src="src\public\img\line.png"/>
                    <Subtitle>Who we are</Subtitle>
                </WhatWeDo>
                <Desc>a creative group of designers and develops with a passion for the arts.</Desc>
                <Button>See our works</Button>
            </Right>
         
        </Container>
    </div>
  )
}
