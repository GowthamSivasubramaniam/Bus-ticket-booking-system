import { Component } from "react";
import './Sidebar.css';
import Checkbox from '@material-ui/core/Checkbox';
import {PiCaretDown,PiCaretUp} from 'react-icons/pi';


import Button1 from "./Button1";

const pickup=["Koyambedu","Chengalpattu","Vandalur","Perungalathur","Guduvancheri","SRM University"]
const num=["132","118","116","111","108","103"]

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state={input:'',input1:'',empty:false,color:''};
    }
   
    
    render(){
        return(
            <div className="sidebar">
                <div className="flexRow alignBase">
                    <h3 style={{marginRight:"50%"}}>Filters</h3>
                    <p style={{marginLeft:'-80px'}}id="clear">Clear all</p>
                </div>
                <hr/>
                <div className="flexCol">
                    <h3>AC</h3>
                    <div className="flexRow">
                        <Button1  icon="1" name="AC"/> 
                        <Button1 icon="2" name="Non AC"/> 
                    </div>
                </div>
                <hr/>
                <div className="flexCol">
                    <h3>Seat Type</h3>
                    <div className="flexRow">
                        <Button1 icon="4" name="Sleeper"/>
                        <Button1 icon="3" name="Seater"/> 
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}
export default Sidebar;