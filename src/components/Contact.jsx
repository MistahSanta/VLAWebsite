import React, { useState, useRef } from "react";
import "..//styles.css";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {GiLotus} from "react-icons/gi"
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  grid-template-rows: min-content 1;
  grid-template-columns: repeat(2,minmax(0, 2fr));
  
  gap: 40px;
  overflow: hidden;
  z-index: 10;
  &::before {
    content: "";

    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 90%;
    clip-path: polygon(-150% 150%, 100% 100%, 110% 1%);
    background: #80ff80;  /* fallback for old browsers */
    background: linear-gradient(to right, #80ff80 10%, #45e645 20%, #80ff80, #45e645 ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(
      217deg,
      #80ff80,
      #45e645 70.71%
    ), linear-gradient(127deg, #80ff80, #45e645 70.71%),
    linear-gradient(336deg,#80ff80,  #45e645 70.71%);


  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Title = styled.h1`
  font-weight: 200;
  
  @media (max-width: 579px) {
    text-align: center;
  }
`;
const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 25px;

`;
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;

  @media (max-width: 579px)
  {
    padding: 10px;
  }
`;
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;

  @media (max-width: 579px)
  {
    padding: 10px;
  }
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
  align-items: start;
  justify-content: flex-end;

  @media (max-width: 579px) {
    justify-content: center;
  }
`;
const Right = styled.div`
  flex: 1;
  align-items: start;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  @media (max-width: 850px) {
    display:none;
    
  }
`;
const RightTop = styled.div`
  flex: 1;
  width: 100%;

`;
const RightBottom = styled.div`
  flex: 2;
  color: black;
  width: 100%;
  position: relative;
`


const FormContainer = styled.div`
  background-color: black;
  padding: 5% 8% 5% 8%;
  border: #ff83e2 solid 3px;
  box-shadow: rgba(231, 232, 233, 0.12) 0px 2px 4px 0px, rgba(227, 229, 230, 0.32) 0px 2px 16px 0px;
  border-radius: 5%;
  
  @media (max-width: 760px) {
      display:flex;
      justify-self: center;
      
      width: 80%;
  }

  @media (max-width: 579px)
  {
    display:flex;
      justify-self: center;
      
      width: 70vw;
      height: 55dvh;
  }
  `;

const Header = styled.h1`
  margin-top: 1%;
  width: inherit;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 3;
  align-self: center;
  flex-direction: column;
  font-size: 3rem;

  @media ( max-width: 579px)
  {
    margin-top: 10%;
  }
  
`
const SubHeader = styled.h2`
  margin-top: 1%;
  font-size: 1.5rem;
  color: lightgray;

  @media (max-width: 579px) {
    margin-top: 5%;
    font-size: 5vw;
  }
`

const Join = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 1%;
`
const Platforms = styled.h2`
  color: black;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

`

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

  const data = [ 
    "Show up to our next event",
    "Follow us to get alert on upcoming events",
    "Reach out to us :)",
  ];


  return (
    <div className="Contact-section" id="contact">
            
      <Container>
        <Header>Contact us
          {'\n'}
          <SubHeader>We would be happy to answer any question you have about VLA or the Vietnamese Language</SubHeader>
        </Header>
        <Left>
          <FormContainer>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Email us !</Title>
            <Input placeholder="Name" name="name" required/>
            <Input placeholder="Email" name="email" required />
            <TextArea placeholder="Your Message" name="message" rows={10} required />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent! We will get back to you soon :)"}
          </Form>
          </FormContainer>
        </Left>
        <Right>
              <RightTop>

              </RightTop>
              <RightBottom>
                  <Join>Joining VLA:</Join>
                
                    {data.map( (desc) => 
                     
                      <Platforms key={desc}>
                        <GiLotus style={{
                          margin: "5px 10px 0 20px",
                          width: "40px",
                          height: "40px",
                          color: "#ff83e2",
                        }}/>
                        {desc}
                        </Platforms>
                    )}


              </RightBottom>
        </Right>
        <Footer />

      </Container>

    </div>
  );
};
