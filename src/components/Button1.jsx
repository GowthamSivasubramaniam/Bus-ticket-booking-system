import { useState } from "react";
import { styled } from "styled-components";
import {TbSnowflake,TbSnowflakeOff,TbArmchair,TbBedFilled} from 'react-icons/tb';

const Butt1=styled.button`
    height: 50px;
    width: 100px;
    margin: 10px 20px 10px 20px;
    align-items: center;
    border-radius: 10px;
    border-style:none;
    color:white;
    display:flex;
    flex-direction:row;
    background-color:${props=>(props.col?"grey":"rgb(71, 74, 231)")};
    &:hover{
        cursor:pointer;
    }
`

export default function Button1(props){
    const [coll1,changeColl]=useState(true);
    const a=props.icon;
    const b=props.name;
    return(
         <Butt1 col={coll1} onClick={()=>changeColl(!coll1)}><span>{a=='1'?<TbSnowflake style={{height: '15px',width: '15px',marginTop: '5px',marginLeft:'10px'}}/>:a=='2'?<TbSnowflakeOff style={{height: '15px',width: '15px',marginTop: '5px',marginLeft:'10px'}}/>:a=='3'?<TbArmchair style={{height: '15px',width: '15px',marginTop: '5px',marginLeft:'10px'}}/>:<TbBedFilled style={{height: '15px',width: '15px',marginTop: '5px',marginLeft:'10px'}}/>}</span><p style={{marginLeft:'10px'}}>{b}</p></Butt1>
    )
}