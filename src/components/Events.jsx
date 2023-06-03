import React from 'react'
import "..//styles.css";
import styled from "styled-components";
import Social from "../assets/social.png";



const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 70%;
    position: relative;
    display: column;
    justify-content: space-between;
    flex-shrink: 0;
    align-items: center;

`

const Title = styled.h1`
  color: white;
  font-size: 74px;
  display: flex;
  justify-content: center;
  margin-top: 5%;
  padding-bottom: 3%;
`
const Card = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  padding: 2% 2% 0% 2%;
  border: solid white 1px;
  box-shadow: 1px 1.5px 7px lightgray;
`
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3vw;
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
  margin-top: 5%;
`
const EventName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 4% 2% 5%;
`
const Desc = styled.div `
  font-size: 1.1rem;
  color: lightgray;
  margin: 0 2%;
  line-height: 1.5rem;
`
const  Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  overflow: hidden;
  align-self: center;
  justify-self: center;
  border-radius: 13%;
`
const LearnMore = styled.a`
  margin: 4% 2%;
  text-decoration: underline;
  color: gray;
  font-size: 1rem;
  width: max-content;
  cursor: pointer;

  &:hover{
    color: white;
  }
`
export const Events = () => {
  const data = [
    {name: "Vietnamese Language Workshop", img: Social, desc:"A workshop to teach Vietamese! sal;fjhlasdfjh lasjfldsajfl ;ajs;lfj lasd;jflsdajfl jsadl;fj asdl;jflasdjflsadjfl;"},
    {name: "Social Hangouts", img: Social, desc:"A workshop to teach Vietamese! sal;fjhlasdfjh lasjfldsajfl ;ajs;lfj lasd;jflsdajfl jsadl;fj asdl;jflasdjflsadjfl;"},
    {name: "Vietnamese Book Reading", img: Social, desc:"A workshop to teach Vietamese! sal;fjhlasdfjh lasjfldsajfl ;ajs;lfj lasd;jflsdajfl jsadl;fj asdl;jflasdjflsadjfl;"},
  ]

  return (
    <div className='Events-section' id="event">
      <Container>
        <Title>Events</Title>
        <CardContainer>  

          {data.map( (events) => (
            <Card key={events.name}>
              <Image src={events.img} />
              <EventName>{events.name}</EventName>
              <Desc>{events.desc}</Desc>
              <LearnMore>Learn More</LearnMore>
            </Card>
          ))}
          
            
        </CardContainer>
        <Link>Upcoming Events</Link>
      </Container>
    </div>
  )
}
