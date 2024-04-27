import React, { useState } from "react";
import "./home.css";
import {BsArrowLeftRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';
function Home()
{   
    var [A1,s]=useState("");
    var [A2,s1]=useState("");
    function saveTxt(event)
    {
        s(event.target.value);
    }
    function saveTxt1(event)
    {
        s1(event.target.value);
    }
    function chan()
    {
        var t=A1;
        s(A2);
        s1(t);
    }

    return(
    <>
    <div className="Title-container"
    style={{
        height:'900px',
        width:'1540px',
    }}
   >
    <div style={{
        marginTop:'10px',
        marginLeft:'30px',
        display:'flex',
    }}>
    <h1 style={{
        fontSize:'3.5em',
        color:'white',
        
    }}>
        BusBrio
    </h1>
    <div className="Button">
     <h2>
            Log in

        </h2>

    </div>
    <div className="Button-up">
    <h2>
            Sign up 

        </h2>

    </div>
    </div>
    <div className="content">
        
        <h1 style={{
            color:'black',
            marginTop:'-40px'
        }} >
        Where will you  go Next?
        </h1>
        <div style={{
            display:'block'
        }}>
            <div style={{
                marginTop:'60px',
                height:'60px',
                width:'800px',
                background:'white',
                borderRadius:'15px',
                display:'flex'

            }}>
                <input onChange={saveTxt1} type="text" value={A2} className="input-field"  placeholder="Pick up place eg: Chennai"/>
                <div className='cgbt'style={{
                    color:'black',
                    marginLeft:'40px',
                    marginTop:'5px',
                    fontSize:'1.6em',
                    borderRadius:'30px',
                    background:' #cccccc',
                    width:'50px',
                    height:'50px',
                
                }} onClick={chan}><div style={{
                    marginTop:'13px',
                    marginLeft:'12px'
                }}><  BsArrowLeftRight/></div></div>
                <input onChange={saveTxt} type="text" value={A1} className="input-field"  placeholder="Drop up place eg: coimbatore"/>
            </div>
            <div className="g-button">
                <Link to="/book"><h2 >Go</h2></Link>
            </div>
        </div>
    </div>
    </div>
    </>
    );
}
export default Home;