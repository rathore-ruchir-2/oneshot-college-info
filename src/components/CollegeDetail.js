import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import {baseUrl} from '../config'
import CollegeCard from './CollegeCards'
import Button from '@material-ui/core/Button';


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
}));

export default function CollegeDetail(props) {
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
  return (
    <div className={classes.root}>
        <div style={{width: '100%'}}>
      <Paper elevation={3} style={{width: '60%', marginTop: "100px", }}>
            <div style={{  fontFamily: 'sans-serif', fontSize: '30px', marginLeft: '10px',}}>{college && college.name}</div>
            <br />
            <div style={{display: 'flex', flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                <div style={{marginLeft: '10px', fontSize: '20px'}}>City: <span style={{fontFamily: 'cursive'}}>{college && college.city}</span></div>
                <div style={{marginLeft: '10px', fontSize: '20px'}}>State: <span style={{fontFamily: 'cursive'}}>{college && college.state}, {college && college.country}</span></div>
            </div>
            <div style={{display: 'flex', flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                <div style={{marginLeft: '10px', fontSize: '20px'}}>Number of Students Enrolled: <span style={{fontFamily: 'cursive'}}>{college && college.number_of_student}</span></div>
                <div style={{marginLeft: '10px', fontSize: '20px'}}>Courses Offered: <span style={{fontFamily: 'cursive'}}>{college && college.courses.length}</span></div>
            </div>
      </Paper>
      </div>
      
      <Button variant="contained" color="default" href={`/colleges/${props.match.params.collegeId}/students`} style={{marginTop: '100px', height: '40px', width: '150px', position: 'relative'}}>
        View Students
      </Button>
      <div style={{fontSize: '30px', marginTop: '200px', width: "60%"}}>Colleges Similar to {college && college.name}</div>
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
  );
}
