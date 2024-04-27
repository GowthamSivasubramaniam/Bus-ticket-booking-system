import React from "react";
import { useNavigate } from "react-router-dom";
import "../resourses/busfront.css";
import logo from "../resourses/assets/bg.jpeg"
function Bus({ bus }) {
  const navigate = useNavigate();
  return (
    <div style={{padding:'30px',height:'280px',background:'white',borderRadius:'20px',overflow:'hidden',width:'500px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
      <div style={{height:'570px',background:'rgb(41, 182, 119)',borderRadius:'20px',width:'570px',marginLeft:'100px',marginTop:'-490px'}}  >
</div>
<img src={logo} style={{width:'100px',height:'60px',marginTop:'-150px',marginLeft:'-20px',borderRadius:'10px'}}/>
      <h1 style={{fontSize:'1.8em',color:'white',marginLeft:'150px',marginTop:'-80px'}}>{bus.name}</h1>
      
      <div className="d-flex justify-content-between" style={{marginTop:'40px'}}>
        <div>
          <h1 style={{fontSize:'1.2em'}}>From</h1>
          <p className="text-sm">{bus.from}</p>
        </div>

        <div>
          <h1 style={{fontSize:'1.2em',fontWeight:'500px'}}>To</h1>
          <p className="text-sm">{bus.to}</p>
        </div>

        <div>
          <h1 style={{fontSize:'1.2em'}}>Fare</h1>
          <p className="text-sm">Rs. {bus.fare} /-</p>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between align-items-end">
        <div>
          <h1 style={{fontSize:'1.2em'}}>Joureny Date</h1>
          <p className="text-sm">{bus.journeyDate}</p>
        </div>

        <div className="bus1" style={{textDecoration:'none',width:'120px',height:'50px',borderRadius:'10px',WebkitTextFillColor:'white',textAlign:'center'}} onClick={()=>{
            navigate(`/book-now/${bus._id}`)
        }}><h2 style={{fontSize:'1.2em',marginTop:'14px'}}>Book Now</h2></div> 
      </div>
    </div>
  );
}

export default Bus;
