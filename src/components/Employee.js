import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import  'react-bootstrap';
import Fab from '@mui/material/Fab';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';

import NavigationIcon from '@mui/icons-material/Navigation';

import "./Employee.css";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Employee() {

function createData(types,lastmonth,thismonth) {
  return { types,lastmonth,thismonth };
}

const rows = [
  createData('Inflow', 159, 6.0),
  createData('OutFlow', 237, 9.0),
  createData('Total', 262, 16.0),
  
];

return (
<div className="eb" id="growth">
<h1 class="emph"> Hello Jennifer 😊</h1>
<div className="emplink">
<Fab variant="extended">
        
        Expense
        <NavigateNextSharpIcon/>
      </Fab>
      
      <Fab variant="extended" style={{marginLeft:"80px"}}>
        
       Income
       <NavigateNextSharpIcon />
      </Fab>
      <br/><br/>
      <Fab variant="extended" sx={{ mr: 4 }}>
        
        Report
        <NavigateNextSharpIcon />
      </Fab>
      
      <Fab variant="extended" style={{marginLeft:"56px"}}>
        
        Budget
        <NavigateNextSharpIcon/>
      </Fab>
      <br/><br/>
      <Fab variant="extended"style={{marginLeft:"92px"}}>
        
        Profile
        <NavigateNextSharpIcon/>
      </Fab>
     </div>
<div class="emptable">
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Last Month</TableCell>
            <TableCell align="right">This Month</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.types}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.types}
              </TableCell>
              <TableCell align="right">{row.lastmonth}</TableCell>
              <TableCell align="right">{row.thismonth}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
</div>
);
}

export default Employee;