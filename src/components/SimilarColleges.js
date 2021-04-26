import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import {baseUrl} from '../config'
import CollegeCard from './CollegeCards'
import Button from '@material-ui/core/Button';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css'
import CircularProgress from '@material-ui/core/CircularProgress';


const themeColor = '#03CBBB'
const { Column, ColumnGroup } = Table;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  trialPeriod: {
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column'  
  },

 
chartPaper: {
  marginTop: '100px',
  width: '100%',
  minHeight: '400px'
},

}));


export default function SimilarCollege(props) {
    const classes = useStyles();
    const [college, setCollege] = useState(null)
    const [similarColleges, setSimilarColleges] = useState(null)
    const [students, setStudents] = useState(null)
    const data=null
  
  
  
    useEffect(() => {
        console.log(props)
        axios.get(`${baseUrl}/colleges/${props.match.params.collegeId}`)
      .then((res) =>{
          console.log(res)
          setCollege(res.data[0])
      })
      .catch((err) => console.log('not found'))
  
        axios.get(`${baseUrl}/colleges/${props.match.params.collegeId}/similarColleges`)
        .then((res) => {
              console.log(res.data)
              setSimilarColleges(res.data)
        })
        .catch((err) => console.log('not found'))
  
        
        
  
        axios.get(`${baseUrl}/students/${props.match.params.collegeId}`)
        .then((res) => {
            console.log(res)
            setStudents(res.data)
        })
        .catch((err) => console.log('not found'))
    }, [])
  
    if(similarColleges!=null){
    return (
      <div className={classes.root}>
          <div style={{width: '100%'}}>
        
        {/* <Button variant="contained" color="default" href={`/colleges/${props.match.params.collegeId}/students`} style={{marginTop: '100px', height: '40px', width: '150px', position: 'relative'}}>
          View Students
        </Button> */}
        <div style={{fontSize: '30px', marginTop: '100px', width: "60%"}}>Colleges Similar to {college && college.name}</div>
        <Grid container>
                <Grid item xs={12} sm={12} lg={9} >
                <Paper className={classes.chartPaper}>
                <Table dataSource={similarColleges}>
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
         <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
             {
                 similarColleges && similarColleges.map((item) => {
                     return (
                         <CollegeCard college={item} />
                     );
                 })
             }
          </div> 
         </div>
          
      </div>
    );
    }

    else
    {
      return (
        <div className={classes.loaderRoot} style={{marginTop: '300px'}}>
        <CircularProgress style={{color: themeColor}}/>
      
      </div>
      );
    }
  }
  