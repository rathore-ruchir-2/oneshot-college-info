import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import {baseUrl} from '../config'
import CollegeCard from './CollegeCards'


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

export default function StudentDetail(props) {
  const classes = useStyles();
  
  const [student, setStudent] = useState(null)
  const data=null
  useEffect(() => {
      console.log(props)
     
      axios.get(`${baseUrl}/students/${props.match.params.collegeId}/${props.match.params.studentId}`)
      .then((res) => {
          console.log(res)
          setStudent(res.data[0])
      })
      .catch((err) => console.log('not found'))
  }, [])
  return (
    <div className={classes.root}>
        <div style={{width: '100%'}}>
      <Paper elevation={3} style={{width: '60%', marginTop: "100px", }}>
            <div style={{  fontFamily: 'sans-serif', fontSize: '30px', marginLeft: '10px',}}>{student && student.name}</div>
            <br />
            <div style={{display: 'flex', flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                <div style={{marginLeft: '10px', fontSize: '20px'}}>Yeaar of batch: <span style={{fontFamily: 'cursive'}}>{student && student.yearOfBatch}</span></div>
                <div style={{marginLeft: '10px', fontSize: '20px'}}>College Id: <span style={{fontFamily: 'cursive'}}>{props.match.params.collegeId}, </span></div>
            </div>
            <div style={{display: 'flex', flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                <div style={{marginLeft: '10px', fontSize: '20px'}}>Skills: <span style={{fontFamily: 'cursive'}}>{student && student.skills.map((item) => {
                    return (<span>{item.skill_name},</span>);
                })}</span></div>
            </div>
      </Paper>
      </div>
      
      
        
    </div>
  );
}
