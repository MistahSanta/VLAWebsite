import React from "react";
import "..//styles.css";
import styled from "styled-components";
import Social from "../assets/social.png";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  position: relative;
  display: column;
  justify-content: space-between;
  flex-shrink: 0;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 74px;
  display: flex;
  justify-content: center;
  margin-top: 5%;
  padding-bottom: 3%;
  z-index: 10;
`;
const Card = styled.div`
  width: 90%;
  aspect-ratio: 1/1;

  flex-direction: column;
  
  border: solid white 1px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  
  z-index: 10;
  background-color: black;
  padding: 15% 15%;
  @media (max-width: 456px)
  {
    padding: 10% 10%;
    scroll-snap-align: start;
    overflow: hidden;
    
  }


`;
const CardContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  gap: 3vw;
  padding: 0 5%;
  width: 100%;
  height: 100%;

  @media (max-width: 456px)
  {
    padding: auto;
  }


`;
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
`;
const EventName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 4% 2% 5%;
  color: #ff83e2;
`;
const Desc = styled.div`
  font-size: 1.1rem;
  color: lightgray;
  margin: 0 2%;
  line-height: 1.5rem;
  margin-bottom: 10%;
`;
const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  overflow: hidden;
  align-self: center;
  justify-self: center;
  border-radius: 13%;
`;
const LearnMore = styled.a`
  margin: 4% 2%;
  text-decoration: underline;
  color: gray;
  font-size: 1rem;
  width: max-content;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const Scroller = styled.div`

  @media (max-width: 456px) {
    display: grid;
    
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 1rem;
    gap: 3rem;
    grid-auto-flow: column;
    grid-auto-columns: 80%;

    overflow-x:auto;
    overscroll-behavior-inline: contain;
  }

`
export const Events = () => {
  const data = [
    {
      name: "Vietnamese Language Workshop",
      img: Social,
      desc: "A workshop to teach Vietamese! sal;fjhlasdfjh lasjfldsajfl ;ajs;lfj lasd;jflsdajfl jsadl;fj asdl;jflasdjflsadjfl;",
    },
    {
      name: "Social Hangouts",
      img: Social,
      desc: "A workshop to teach Vietamese! sal;fjhlasdfjh lasjfldsajfl ;ajs;lfj lasd;jflsdajfl jsadl;fj asdl;jflasdjflsadjfl;",
    },
    {
      name: "Vietnamese Book Reading",
      img: Social,
      desc: "A workshop to teach Vietamese! sal;fjhlasdfjh lasjfldsajfl ;ajs;lfj lasd;jflsdajfl jsadl;fj asdl;jflasdjflsadjfl;",
    },
  ];

  return (
    <div className="Events-section" id="event">
      <Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          opacity="1"
          viewBox="0 336.6 2400 526.8"
          style={{
            position: "absolute",
            top: "10%",
            left: "0",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <g fill="#80ff80" transform="matrix(1,0,0,1,0,11.397918701171875)">
            <path
              d="M 0 273.204200502693 Q 600 450 600 321.52268052485056 Q 1200 450 1200 383.0752357763102 Q 1800 450 1800 316.96800793362104 Q 2400 450 2400 350.4799806965252 L 2400 800 L 0 800 L 0 274.4915433660245 Z"
              transform="matrix(1,0,0,1,0,52)"
              opacity="NaN"
            ></path>
          </g>
        </svg>

        <Title>Events</Title>
        <CardContainer>
        <div class="wave-container"></div>
          <Scroller>
            {data.map((events) => (
              <Card key={events.name}>
                <Image src={events.img} />
                <EventName>{events.name}</EventName>
                <Desc>{events.desc}</Desc>
                {/*<LearnMore>Learn More</LearnMore>*/}
              </Card>
            ))}
          </Scroller>
        </CardContainer>
       {/* <Link>Upcoming Events</Link> */}
      </Container>
    </div>
  );
};
