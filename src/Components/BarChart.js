import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';


let data = [];

for(var x=0; x<7; x++){
    data.push({
      value:(1 + Math.random()),
      key: x,
    })
}


export default function BarGraph() {

    return (
      <React.Fragment>
        <div style={{paddingBottom:"10px"}}>
        <p style={{marginTop:'0', marginBottom:'10'}}>New Users</p>
        <h1 style={{marginTop:'0', marginBottom:'0'}}>93.2%</h1>
        </div>
        <ResponsiveContainer width="80%" height={75}>
          <BarChart
            data={data}
            height="20"
            barGap="5"
            margin={{top: 5, right: 5, bottom: 5, left: 30 }}
          >
          <XAxis dataKey="key" hide="true"  />
          <YAxis hide="true" height='10'/>

          <Bar dataKey="value" fill="#3f51b5" />
           
          </BarChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }