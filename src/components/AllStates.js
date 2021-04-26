import React , {useState, useEffect}from 'react'
import axios from 'axios';
import {baseUrl} from '../config'
import { duration, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Table, Tag, Space } from 'antd';
import { Pie } from '@ant-design/charts';
import 'antd/dist/antd.css'
import Button from '@material-ui/core/Button'
import DateRangeIcon from '@material-ui/icons/DateRange';
import CircularProgress from '@material-ui/core/CircularProgress';



const themeColor = '#03CBBB'
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
  table: {
    minWidth: 650,
  },
  
  chartPaper: {
      marginTop: '20px',
      width: '100%',
      minHeight: '400px'
  },

}));


function AllStates (props){

    const [donutChartData, setDonutChartData] = useState([])
    var list=[]
    const classes = useStyles();

    
    useEffect(() => {

      axios.get(`${baseUrl}/colleges/all-states`)
      .then((res) => {
          console.log(res.data.length)
          setDonutChartData(res.data)
        })
      .catch((err) => console.log(err));

        
        console.log(donutChartData)
        
    }, [])

    
    var config = {
        appendPadding: 10,
        data: donutChartData,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            formatter: function formatter() {
              return '%';
            },
          },
        },
      };
    
      const myFunc = (chart, event) => {
    
        if(event.type=="interval:click"){
          console.log(event.data.data.type)
          props.history.push(`/colleges/state/${event.data.data.type}`)
        }
        
      }
      if(donutChartData.length!=0){
      return (
        <div style={{backgroundColor: '#F5F5F5'}} >
            <Grid container style={{marginLeft: '100px', marginTop:'200px'}}>
                <Grid item xs={12} sm={12} lg={6}>
                <div><Button><DateRangeIcon style={{color: themeColor}}/>All States Colleges</Button></div>
                 <Pie {...config}  onEvent={(chart, event) => myFunc(chart, event)}/> 
                </Grid>
            </Grid>

        </div>
      );
      }

      else{
        return (
          <div className={classes.loaderRoot} style={{marginTop: '300px'}}>
          <CircularProgress style={{color: themeColor}}/>
        
        </div>
        );
      }

}

export default AllStates
