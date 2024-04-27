import { useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';

export default function Pickup(props){
    // const pickup=["Koyambedu","Chengalpattu","Vandalur","Perungalathur","Guduvancheri","Mahendra City","Gundi","SRM University","Ashok Pillar","Tambaram","Pallavaram","Chrompet","velachery","Sembakkam","Egmore","Central Railway Station","Sriperumbudur","ECR","Chepakk","Adayar"]
    //     const drop=["Gandhipuram","Karumathapatti","Pilamedu","Lakshmi Mills","Neelambur","KMCH","Sitra","Chinniyampalayam","Avinashi","Saravanampatti","Kovilpalayam Busstand","Ukkadam","Ettimadai","Thondamuthur","Singanallur","Kaniyur","Annur","Palladam"]
    const p1=props.stop.map(p=>{
        return <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Checkbox/>
            <label>{p}</label>
            </div>
    })
    return(
        <div>
            {p1}
        </div>
    )
}