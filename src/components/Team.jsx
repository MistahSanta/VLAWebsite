import React from 'react'
import "..//styles.css";
import styled from "styled-components";
import John from "..//assets/officers/john.jpg"
import Angela from "..//assets/officers/angela.jpg"
import Justin from "..//assets/officers/justin.jpg"
import Jack from  "..//assets/officers/jack.jpg"
import Tri from "..//assets/officers/tri.jpg";
import Thien from "..//assets/officers/thien.jpg"

const Container = styled.div`
  width: 1400px;
  display:flex;
  justify-items: center;
  align-items: center;

`
const GridContainer = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  grid-template-rows: repeat(3, minmax(0,1fr));
  grid-template-columns: repeat(3,minmax(0, 300px));
  
  width: 100%;
  height: 85%;
`

const Card = styled.div`
  position: relative;
  justify-self: center;
  width:100%;
  height: 100%;
  display: grid; 
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 5fr 1fr;

`


export const Team = () => {
  const data = [
    { name: "Angela", image: Angela, role: "President", class: "item1"},
    { name: "Thien Nguyen", image: Thien, role: "Social Chair", class: "item2"},
    { name: "Tri Nguyen", image: Tri, role: "Vice President", class: "item5"},
    { name: "Jack Le", image: Jack, role: "Marketing Chair", class: "item3"},
    { name: "Justin Tran", image: Justin, role: "Treasurer", class: "item4"},
    { name: "Jonathan Le", image: John, role: "Developer", class: "item6"},
  ]

  
  return (
    <div className='Works-section' id="team">

      <Container>
        <GridContainer>
          {data.map( (officer) => (
            <Card key={officer.name} className={officer.class}>
              
                <img src={officer.image} className="card-image"  />
                  <div className='card-name'>{officer.name}</div>
                <div className='card-position'>{officer.role}</div>
              
            </Card>
          ))}


        </GridContainer>
      </Container>
    </div>
  )
}
