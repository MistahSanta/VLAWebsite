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
    width: 80%;
    position: relative;
    display: column;
    justify-content: space-between;
    flex-shrink: 0;
    text-align: center;
`

const Title = styled.h1`
  color: white;
  font-size: 74px;
  display: flex;
  justify-content: center;
  margin-top: 5%;

`
const Card = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: blue;
  border-radius: 6%;
`
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 10px;
  align-items: center;
  height: 60%;
  flex-grow: 1;



`

const Desc = styled.div`
   font-size: 24px;
   color: lightgray
`
const Link = styled.button`
  background-color: #ff83e2;
  display: flex;
  margin: 1% auto;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  
`


export const Events = () => {
  return (
    <div className='Events-section'>
      <Container>
        <Title>Events</Title>
        <CardContainer>  
        
          <Card>
            Vietnamese Language Workshops
          </Card> 
          <Card>Socials!</Card>
          <Card>Vietnamese Book reading!</Card>
          
            
        </CardContainer>
        <Link>Upcoming Events</Link>
      </Container>
    </div>
  )
}
