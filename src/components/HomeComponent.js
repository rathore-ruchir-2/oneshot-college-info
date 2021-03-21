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

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  

const columns = [
    {
        title: 'S. No.',
        dataIndex: 'sno',
        key: 'sno',
    },

    {
        title: 'College',
        dataIndex: 'college',
        key: 'college'
    },

    {
        title: 'City',
        dataIndex: 'city',
        key: 'city'
    },

    {
        title: 'State',
        dataIndex: 'state',
        key: 'state'
    },

    {
        title: 'Country',
        dataIndex: 'country',
        key: 'country'
    }

]
function Home(props)
{
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(`${baseUrl}/colleges`)
        .then(res => {
            var count=1;
            const array = res.data.map((item) => {
                return (
                    {
                        
                        name: item.name,
                        city: item.city,
                        state: item.state,
                        country: item.country,
                        id: item._id
                    }
                );
                count++;
            })
            
            setData(array)
            
        })
    }, [])
    const rows = data;
    console.log(rows)
    const classes = useStyles();

    return (
        <div style={{width: '100%'}}>
                <h1>Colleges List</h1>
                {/* <Table style={{marginLeft: '100px'}} columns={columns} dataSource={data} /> */}
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: "bold"}}>College Name</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>City</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>State</TableCell>
                            <TableCell align="right"style={{fontWeight: "bold"}} >Country</TableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows && rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row" >
                                 <a href={`/colleges/${row.id}`} style={{textDecoration: "none", color: "black"}}>{row.name}</a>
                            </TableCell>
                            <TableCell align="right">{row.city}</TableCell>
                            <TableCell align="right">{row.state}</TableCell>
                            <TableCell align="right">{row.country}</TableCell>
                            {/* <TableCell align="right">{row.protein}</TableCell> */}
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
            </TableContainer>
        </div>
    );
}

export default Home;