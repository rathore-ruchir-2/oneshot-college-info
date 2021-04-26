import React, {Component, useState, useEffect} from 'react'
// import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import {baseUrl} from '../config'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css'
import CircularProgress from '@material-ui/core/CircularProgress';

const { Column, ColumnGroup } = Table;

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    chartPaper: {
        marginTop: '100px',
        width: '100%',
        minHeight: '400px'
    },
  });

  const themeColor = '#03CBBB'


  function CollegeListOfState(props){
    const [data, setData] = useState(null)
    console.log(props);
    useEffect(() => {
        axios.get(`${baseUrl}/colleges/state/${props.match.params.state}`)
        .then(res => {
            var count=1;
            const array = res.data.map((item) => {
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

    if(data!=null){
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={12} lg={9} >
                <Paper className={classes.chartPaper}>
                    <h1>Colleges in {props.match.params.state}</h1>

                <Table dataSource={rows}>

                    <Column title="College Name" dataIndex="name" key="name" render= {text => <a href={`/colleges/name/${text}`}>{text}</a> } />
                    <Column title="City" dataIndex="city" key="city" />
                    <Column title="State" dataIndex="state" key="state" render= {text => <a href={`/colleges/state/${text}`}>{text}</a> }/>
                    <Column
                    title="Courses"
                    dataIndex="courses"
                    key="courses"
                    render={ courses => (
                        <>
                        {courses.map(item => {
                                        if(item.course_name == 'ECE' || item.course_name == 'Civil'){
                                            return (
                                                <a href={`/colleges/courses/${item.course_name}`}><Tag color="volcano" key={item.id}>
                                                {item.course_name}
                                                </Tag></a>
                                            );
                                        }

                                        if(item.course_name == 'CSE'){
                                            return (
                                                <a href={`/colleges/courses/${item.course_name}`}><Tag color="blue" key={item.id}>
                                                {item.course_name}
                                                </Tag></a>
                                            );
                                        }

                                        else{
                                            return (
                                                <a href={`/colleges/courses/${item.course_name}`}><Tag color="green" key={item.id}>
                                                {item.course_name}
                                                </Tag></a>
                                            );
                                        }
                                    }
                            )}
                        </>
                    )}
                    />
                </Table>
                </Paper>
                </Grid>
            </Grid>
        </div>
    );
    }

    else{
        return(
            <div className={classes.loaderRoot} style={{marginTop: '300px'}}>
            <CircularProgress style={{color: themeColor}}/>
          
          </div>
        );
    }
  }

export default CollegeListOfState;