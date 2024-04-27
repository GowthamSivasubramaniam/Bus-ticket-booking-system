import {Component} from "react";
import styled from "styled-components";
import Checkbox from '@material-ui/core/Checkbox';

const Div=styled.div`
    width:80%;
    background-color:white;
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
    max-height:300px;
    margin:10px 10px 0px 0px;
`

export default class SearchResults extends Component{
    constructor(props){
        super(props);
    }
    render(){
        // const pickup=["Koyambedu","Chengalpattu","Vandalur","Perungalathur","Guduvancheri","Mahendra City","Gundi","SRM University","Ashok Pillar","Tambaram","Pallavaram","Chrompet","velachery","Sembakkam","Egmore","Central Railway Station","Sriperumbudur","ECR","Chepakk","Adayar"]
        // const drop=["Gandhipuram","Karumathapatti","Pilamedu","Lakshmi Mills","Neelambur","KMCH","Sitra","Chinniyampalayam","Avinashi","Saravanampatti","Kovilpalayam Busstand","Ukkadam","Ettimadai","Thondamuthur","Singanallur","Kaniyur","Annur","Palladam"]
        // const a=this.props.stop;
        const pp=this.props.stop.filter((p)=>(
            p.toLowerCase().startsWith(this.props.value.toLowerCase())==1
        )).map((p)=>{
            return <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Checkbox/>
            <label>{p}</label>
            </div>
        })
        return(
            <Div>
                {pp.length? pp: <p>No Results Found</p>}
            </Div>
        )
    }
}