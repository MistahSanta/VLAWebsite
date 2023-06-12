import React from 'react'
import { styled } from 'styled-components'


const Foot = styled.div `
    display: flex;
    position: absolute;
    left: 0;
    bottom:0;
    width:100%;
    background-color: black;
    justify-content: center;
    padding-top: 0.15%;
`
function Footer() {
  return (
    <Foot>© Copyright 2023 VLA UTD, All Rights Reserved</Foot>
  )
}

export default Footer