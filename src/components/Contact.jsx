import React, { useState, useRef } from "react";
import "..//styles.css";
import styled from "styled-components";
import emailjs from "@emailjs/browser";


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  gap: 50px;
  overflow: hidden;
  z-index: 10;
  &::before {
    content: "";

    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 90%;
    clip-path: polygon(100% 0, 100% 100%, -50% 110%);
    background: #80ff80;  /* fallback for old browsers */
    background: linear-gradient(to right, #80ff80 10%, #45e645 20%, #80ff80, #45e645 ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(
      217deg,
      #80ff80,
      #45e645 70.71%
    ), linear-gradient(127deg, #80ff80, #45e645 70.71%),
    linear-gradient(336deg,#80ff80,  #45e645 70.71%);


  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

`;
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Right = styled.div`
  flex: 1;
`;

const FormContainer = styled.div`
  background-color: black;
  padding: 10%;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  
  
  `;

export const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gg1n7zo",
        "template_2pfxcbb",
        ref.current,
        "BtckGqDt17KXoWeOG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <div className="Contact-section" id="contact">
      <Container>
        <Left>
          <FormContainer>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Your Message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent! We will get back to you soon :)"}
          </Form>
          </FormContainer>
        </Left>
        <Right>

        </Right>
      </Container>

    </div>
  );
};
