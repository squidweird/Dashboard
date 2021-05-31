import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import {subDays} from "date-fns"
import Button from '@material-ui/core/Button'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



const data = [];


for(let num=0; num<=30; num++){
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0,10),
    value: 1 + Math.random(),
  });
}

export default function Chart() {

  return (
    <React.Fragment>
      <div style={{paddingBottom:"10px"}}>
        <h3 style={{marginLeft:"15px", marginTop:"0", marginBottom:"0", display:"inline-block"}} >Balance</h3>
        <Button size="small" style={{display:'inline-block',position:"relative",left:"55%", paddingTop:"0"}} variant="outlined">Monthly <KeyboardArrowDownIcon /></Button>
      </div>
      <hr />
      <div className="container" style={{display:"flex", justifyContent:'space-evenly'}}>
      <div style={{border:'1px solid', borderRadius:'8%', width:'150px', textAlign:'center', marginLeft:"15px"}}>
      <p styles={{padding:'5px 5px'}}>Earnings</p>
      <h2 style={{ marginTop:"0", padding:'3px'}}>43.41 % <span style={{fontSize:'15px'}}>+ 2%</span></h2>
      </div>
      <div style={{border:'1px solid', borderRadius:'8%',width:'150px',  textAlign:'center',marginRight:"15px" }}>
      <p styles={{paddingLeft:'5px'}}>Sales Value</p>
      <h2 style={{ marginTop:"0", padding:'3px'}} >$1230 <span style={{fontSize:'15px'}} >+ $32</span> </h2>
      </div>
      </div>
      <ResponsiveContainer width="100%" height={200} style={{marginTop:"15px"}}>
        <AreaChart
          data={data}
        >
        <Area dataKey="value" />
          {/* <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} /> */}
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}