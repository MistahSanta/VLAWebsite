import React from "react";
import Navbar from "./Navbar";
import "..//styles.css";
import styled from "styled-components";
import {
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lotus from "./Lotus";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 80%;
  display: flex;
  justify-content: space-between;
  


`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media (max-width: 1399px)
  {
    flex: 2;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;

  @media (max-width: 850px)
  {
    display: none;
  }
  @media (max-width: 1399px)
  {
    flex: 1;
  }
  @media (max-width: 1400px) {
    flex: 2;
  }
`;
const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 579px) {
    text-align: center;
    font-size: 15vw;
  }
`;

const WhatWeDo = styled.div`
  display: flex;

  gap: 10px;

  @media (max-width: 579px) {
    justify-content: center;  
  }
  
`;
const Subtitle = styled.h2`
  color: #ff83e2;

  @media only screen and (max-width: 579px) {
    text-align: center;
    font-size: 5vw;
  }
`;
const Desc = styled.div`
  font-size: 24px;
  color: lightgray;
  @media (max-width: 579px) {
    text-align: center;  
    font-size: 4vw;
  }
  
`;
const Button = styled.a`
  background-color: #ff83e2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  text-align: center;
  text-decoration: none;
  @media (max-width: 579px) {
  margin: 0 auto;  
  }
  
`;



export const Home = () => {
  return (
    <div className="Home-section">
      <Navbar />
      <Container id="home">
        <Left>
          <Title>Xin Chào!</Title>
          <WhatWeDo>
            <Subtitle>- Vietnamese Language Association</Subtitle>
          </WhatWeDo>
          <Desc>
            we aim to have fun learning Vietnamese.
          </Desc>
          <Button href="#event">Learn More</Button>
        </Left>
        <Right>
          <Canvas className="lotus-section"  camera={{fov: 55, position:[4,2,3]}}>

            <ambientLight color="#F81894" intensity={0.5} />
            <directionalLight position={[1, 2, 1]} intensity={0.5} />

            <OrbitControls enableZoom={false} autoRotate enablePan={false} />
            <Lotus/>
          </Canvas>

          <svg
            id="visual"
            className= "greenBackground"
            viewBox="-150 -200 1200 6750"
            version="1.1"
          >
            <g transform="translate(577.0619756043899 328.23943162381295)">
              <path
                d="M195.9 -392.2C223.2 -323.6 193.5 -209.1 179.4 -136C165.4 -63 167.1 -31.5 186.3 11.1C205.5 53.7 242.2 107.3 269.3 203C296.4 298.7 314 436.4 267.5 465.3C221 494.1 110.5 414.1 -1 415.8C-112.5 417.5 -225 501 -291.5 483.8C-358.1 466.5 -378.7 348.5 -418.6 251.1C-458.5 153.7 -517.7 76.8 -540.4 -13.1C-563.1 -103 -549.1 -206 -479.7 -252.3C-410.3 -298.7 -285.4 -288.3 -196.2 -321.2C-107 -354 -53.5 -430 15.4 -456.7C84.3 -483.4 168.7 -460.8 195.9 -392.2"
                fill="#80ff80"
                
              ></path>
            </g>
          </svg>
        </Right>
      </Container>
    </div>
  );
};
