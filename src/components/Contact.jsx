import React, {useState, useRef} from 'react'
import "..//styles.css";
import styled from "styled-components";
import emailjs from "@emailjs/browser"

import {
  OrbitControls, Stage
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lotus from "./Lotus";
import { Light } from 'three';


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

`
const Title = styled.h1`
  font-weight: 200;
`
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`
const Right = styled.div`
  flex: 1;
`



export const Contact = () => {

    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gg1n7zo', 'template_2pfxcbb', ref.current, 'BtckGqDt17KXoWeOG')
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
            setSuccess(false);
        });
    }
  return (
    <div className='Contact-section'>
      <Container>
        
        <Left>
            <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
                <Input placeholder='Name' name="name"/>
                <Input placeholder='Email' name="email"/>
                <TextArea placeholder='Your Message' name="message" rows={10}/>
                <Button type="submit">Send</Button>
                {success &&
                "Your message has been sent! We will get back to you soon :)"}
            </Form>
        </Left>
        <Right>
        <Canvas camera={{fov:25, position:[1,1,1]}}>
              

                
        </Canvas>

        </Right>
      </Container>
    </div>
  )
}
