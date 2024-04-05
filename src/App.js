import React, { useState } from "react";
import styled from "styled-components";
import './App.css';

import IconLightbulb from "./Bulb";

import CustomizedSwitches from "./Button";

export default function App() {
  const [Trigger, setTrigger] = useState(false);
  
  
  return (
  <Box style={{background:Trigger? "linear-gradient(to right, #283048, #859398)": ""}} className={Trigger? "light":""} >
  <Box1>
    <Box2/>
  <IconLightbulb fill={ Trigger ? "#f5af19":"white"} power={Trigger ?  "#ffcc4d":"#696763" } name= {Trigger ? "animation": ""}/>

  <Box3 onClick={() =>setTrigger(!Trigger)}>
  <CustomizedSwitches  />
  </Box3>
  </Box1>
  </Box>);
}

const Box = styled.div`
 height: 100vh;
 background: linear-gradient(to right, #000000, #434343);
 display:flex;
 justify-content: center;
 
`;
const Box1 = styled.div`
 height: 450px;
 width: 450px;
`;

const Box2 = styled.div`
height: 50px;
width:8px;
background-color: gray;
margin-left: 34%;

`;

const Box3 = styled.div`
 margin-top: 100px;
 margin-left: 120px;
 width: 100px;
 border-radius: 30%;
`;
