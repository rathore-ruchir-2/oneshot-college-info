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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import graduate from './graduate.jpeg'

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
    flexDirection: 'column',
    marginLeft: '50px'  
  },

  imgClass: {
    marginTop: '100px',
    maxHeight: '350px',
    height: '100%',
    width: '100%'  
  },

  circle: {
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    display: 'flex',
    fkexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20px',
    backgroundColor: themeColor,
    color: '#ffffff',
    border: '2px solid #ffffff',
    boxShadow: '5px black'
},
chartPaper: {
  marginTop: '100px',
  width: '100%',
  minHeight: '400px',
 
},

cardRoot: {
  maxWidth: 345,
},
media: {
  height: 140,
},

}));

export default function CollegeDetail(props) {
  const classes = useStyles();
  const [college, setCollege] = useState(null)
  const [similarColleges, setSimilarColleges] = useState(null)
  const [students, setStudents] = useState(null)
  const data=null

  const loadSimilarColleges = () => {
    console.log(college && college._id)
    setTimeout(() => {
      axios.get(`${baseUrl}/colleges/${college && college._id}/similarColleges`)
    .then((res) => {
          console.log(res.data)
          setSimilarColleges(res.data)
    })
    .catch((err) => console.log('not found'))
    }, 3000)
    
}

  useEffect(() => {
      console.log(props)
      axios.get(`${baseUrl}/colleges/name/${props.match.params.collegeName}`)
      .then((res) =>{
          console.log(res)
          setCollege(res.data[0])
      })
      .catch((err) => console.log('not found'))

      axios.get(`${baseUrl}/colleges/${college && college._id}/similarColleges`)
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
        <Grid container>
        <Grid item xs={12} sm={6} lg={5}>
        <img className={classes.imgClass} src={graduate}></img>
        </Grid>
        <Grid item xs={12} sm={6} lg={5}>
        <Paper className={classes.trialPeriod}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div style={{fontSize: '20px', fontWeight: 'bold', marginLeft: '10px', marginTop: '10px'}}>College Detail</div>
                    <div style={{marginRight: '20px', marginTop: '10px'}}><HourglassEmptyIcon style={{color: themeColor, fontSize: '40px'}}/></div>
                </div>
                  <div style={{fontSize: '20px'}}>{college &&  college.name}</div>
                  <div style={{fontSize: '20px'}}>Students: {college &&  college.number_of_student}</div>
                  <div style={{fontSize: '20px'}}>Courses: { college && college.courses.map((item) => (<Tag color={themeColor} key={item.id}>{item.course_name}</Tag>))}</div>
                <div>
                    <Paper className={classes.circle} elevation={3}>
                        Top Ranked
                    </Paper>
                    
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: '20px', marginRight: '20px'}}>
                <Button variant='contained' style={{marginTop: '20px', backgroundColor: themeColor}} onClick={() => props.history.push(`/colleges/${college && college._id}/students`)}>Students Enrolled</Button>
                    <Chip label="Apply Now! >>" component="a" href="#" size='small' clickable style={{ backgroundColor: '#ED0394', color: '#ffffff', marginLeft: '10px'}}/>
                </div>
        </Paper>
        <a style={{marginTop: "30px", fontSize:"17px"}} href={`/colleges/${college && college._id}/similarColleges`}>Get Similar Colleges</a>
        </Grid>
        </Grid>
      
      
      {/* <Button variant="contained" color="default" href={`/colleges/${props.match.params.collegeId}/students`} style={{marginTop: '100px', height: '40px', width: '150px', position: 'relative'}}>
        View Students
      </Button> */}
      
       </div>
        
    </div>
  );
}
