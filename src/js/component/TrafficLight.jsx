import React, { useState} from 'react';

export function TrafficLight(){
    const[trafficLightColor, setTrafficLightColor]=useState("red");
 
 /* 
    const allLights=document.querySelectorAll('.light');
    console.log(allLights);
   
    allLights.forEach(light =>{
        light.addEventListener('click', (e)=>{
            setTrafficLightColor(e.target.id);
            console.log("clicked", setTrafficLightColor);
        })
    })
 */   
    return(
        <div style={{ display:'flex', justifyContent:'center', alignContent:'center'}}>
        <div style={{
            width: '150px',
            height: '350px',
            background:'black',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center', 
            alignItems:'center'
           

        }}>
            <div onClick={() => setTrafficLightColor("red")} id='red' className={"light "+(trafficLightColor==="red" ? "selected": "red")}style={{borderRadius:'100%',background: 'red', height:'100px', width:'100px'}}></div>
            <div onClick={() => setTrafficLightColor("orange")} id='orange'className={trafficLightColor==="orange" ? "selected": "orange"}style={{borderRadius:'100%',background: 'orange', height:'100px', width:'100px'}}></div>
            <div  onClick={() => setTrafficLightColor("green")} id='green'className={trafficLightColor==="green" ? "selected": "green"}style={{borderRadius:'100%',background:'green', height:'100px', width:'100px'}}></div>
        </div>
        </div>
    )
}