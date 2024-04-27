import { useState } from "react";
import { styled } from "styled-components";
import {BsSun,BsMoon} from 'react-icons/bs';
import {FiSunrise,FiSunset} from 'react-icons/fi';

const Butt=styled.button`
    height: 60px;
    width: 100px;
    margin: 10px 20px 10px 20px;
    align-items: center;
    border-radius: 5px;
    border-width: 1px;
    border-style:solid;
    background-color: transparent;
    color:${props=>(props.col?"":"Blue")};
    border-color:${props=>(props.col?"":"Blue")};
    &:hover{
        border-color:Blue;
    }
`

export default function Button(props){
    const [coll,changeColl]=useState(true);
    const a=props.icon;
    return(
         <Butt col={coll} onClick={()=>changeColl(!coll)}><span>{a=='2'?<BsSun style={{height: '15px',width: '15px',marginTop: '5px'}}/>:a=='4'?<BsMoon style={{height: '15px',width: '15px',marginTop: '5px'}}/>:a=='1'?<FiSunrise style={{height: '15px',width: '15px',marginTop: '5px'}}/>:<FiSunset style={{height: '15px',width: '15px',marginTop: '5px'}}/>}</span><h5>{props.time}</h5></Butt>
    )
}