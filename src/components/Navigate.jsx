import { useState } from "react";
import {TbArrowsLeftRight} from 'react-icons/tb';
import styled from "styled-components";

const Input=styled.input`
    margin:20px;
    height:50px;
    width:200px;
    border-radius:16px;
    border-width:1px;
    background-color:transparent;
    border: 2px solid #e7e7e7;
    color:white;
    align-items:center;
    font-family: Georgia;
    text-align:center;
    font-size:large;
    &:hover{
        border-width:3px;
    },
    &:focus{
        outline:none;
    }
`;
const H1=styled.h1`
    color:white;
    font-size:70px;
    position:absolute;
    left:1100px;
    top:40px;
    text-shadow:2px 2px 8px black;
`;
const Button=styled.button`
    background-color:transparent;
    height:30px;
    width:30px;
    align-items:baseline;
    border-radius:30px;
    border-color:white;
    border-style:dotted;
    color:white;
    outline:none;
`;
const Button1=styled.button`
    background: linear-gradient(300deg, #39ADFF 0%, #0F7AFF 90%);
    height:50px;
    width:50px;
    align-items:baseline;
    border-radius:50px;
    border-color:white;
    border-style:solid;
    color:white;
    font-size:larger;
    cursor:pointer;
    outline:none;
`;

export default function Navigate(){
    const [p,changeP]=useState('')
    const [d,changeD]=useState('')
    return(
        <>
        <div style={{height:"150px",width:"900px",borderStyle:"solid",padding:"20px",background: "#00c2e8",margin:"15px 30px 0 15px",   borderRadius: "16px",border: "1px solid #e7e7e7",position:"absolute",top:"8px"}}>
            <Input type="text" placeholder="Pickup" value={p} onChange={(event)=>changeP(event.target.value)}/>
            <Button onClick={()=>{changeP(d);changeD(p)}}><TbArrowsLeftRight/> </Button> 
            <Input type="text" placeholder="Drop" value={d} onChange={(event)=>changeD(event.target.value)}/>
            <Input type="date"/>
            <Button1>Go</Button1>
            <H1>BusBrio</H1>

        </div>
        </>
    )
}