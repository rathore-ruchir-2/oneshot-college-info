import React, {Component, useState, useEffect} from 'react'
// import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import {baseUrl} from '../config'
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css'


const { Column, ColumnGroup } = Table;

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
                console.log(item)
                return (
                    {
                        
                        name: item.name,
                        city: item.city,
                        state: item.state,
                        country: item.country,
                        id: item._id,
                        courses: item.courses
                    }
                );
                count++;
            })
            
            setData(array)
            
        })
    },[])
    const rows = data;
    console.log(rows)
    const classes = useStyles();

    return (
        <div style={{width: '100%'}}>
                <h1>Colleges List</h1>
                {/* <Table style={{marginLeft: '100px'}} columns={columns} dataSource={data} /> */}
                <Table dataSource={rows}>

                    <Column title="College Name" dataIndex="name" key="name" />
                    <Column title="City" dataIndex="city" key="city" />
                    <Column title="State" dataIndex="state" key="state" />
                    <Column
                    title="Courses"
                    dataIndex="courses"
                    key="courses"
                    render={ courses => (
                        <>
                        {courses.map(item => (
                            <Tag color="blue" key={item.id}>
                            {item.course_name}
                            </Tag>
                        ))}
                        </>
                    )}
                    />
            </Table>
        </div>
    );
}

export default Home;