import React, {Component, useState, useEffect} from 'react'
// import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import {baseUrl} from '../config'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';


const themeColor = '#03CBBB'


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

  function Student(props)
  {
      const [data, setData] = useState(null)
      const [college, setCollege] = useState(null)
  
      useEffect(() => {
          axios.get(`${baseUrl}/students/${props.match.params.collegeId}`)
          .then(res => {
              console.log(res)
              setData(res.data);
              
              })

          axios.get(`${baseUrl}/colleges/${props.match.params.collegeId}`)
          .then((res) => {
              console.log(res)
              setCollege(res.data[0])
          })
              
      }, [])
      const rows = data;
      console.log(rows)
      const classes = useStyles();
      
      if(data!=null){
      return (
          <div style={{width: '100%'}}>
                  <h1>Student List</h1>
                  {/* <Table style={{marginLeft: '100px'}} columns={columns} dataSource={data} /> */}
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: "bold"}}>Student Name</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Year of batch</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>College Name</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data && data.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row" >
                                 <a href={`/colleges/${props.match.params.collegeId}/students/${row._id}`} style={{textDecoration: "none", color: "black"}}>{row.name}</a>
                            </TableCell>
                            <TableCell align="right">{row.yearOfBatch}</TableCell>
                            <TableCell align="right">{college && college.name}</TableCell>
                            
                            {/* <TableCell align="right">{row.protein}</TableCell> */}
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
            </TableContainer>
          </div>
      );
    }

    else
    {
        return(
            <div className={classes.loaderRoot} style={{marginTop: '300px'}}>
            <CircularProgress style={{color: themeColor}}/>
            
            </div>
        );
    }
  }
  
  export default Student;