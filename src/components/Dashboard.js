import React , {useState, useEffect}from 'react'
import axios from 'axios';
import {baseUrl} from '../config'
import { duration, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Button from '@material-ui/core/Button'
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import DateRangeIcon from '@material-ui/icons/DateRange';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CachedIcon from '@material-ui/icons/Cached';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import TimerIcon from '@material-ui/icons/Timer';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import Chip from '@material-ui/core/Chip';
import TimelineIcon from '@material-ui/icons/Timeline';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import SchoolIcon from '@material-ui/icons/School';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import './dashboard.css'
// import {
//     ArgumentAxis,
//     ValueAxis,
//     Chart,
//     LineSeries,
//   } from '@devexpress/dx-react-chart-material-ui';
import {Chart as PieChart}   from "react-google-charts";
import { Table, Tag, Space } from 'antd';
import { Pie } from '@ant-design/charts';
import 'antd/dist/antd.css'

  const { Column, ColumnGroup } = Table;

  const data = [
    { argument: '2021-02-03', value: 0 },
    { argument: '2021-02-04', value: 0 },
    { argument: "2021-02-05", value: 0 },
    { argument: "2021-02-06", value: 0 },
    { argument: "2021-02-07", value: 0 },
    { argument: "2021-02-08", value: 0 },
    { argument: "2021-02-09", value: 1 },
  ];

  
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
  topBar: {
      width: '100%',
      minWidth: '700px',
      height: '40px',
      marginTop: 0,
      paddingBottom: '30px'
  },

  navBar: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: '60px'
  },
  
  ulist: {
      listStyle: 'none',
      display: 'inline',
      marginRight: '10px',
      marginTop: '5px'
      
  },

  list: {
      listStyle: 'none',
      display: 'inline',
      marginRight: '10px'
  },

  help: {
      marginTop: '0px'
  },

  chartPaper: {
      marginTop: '20px',
      width: '100%',
      minHeight: '400px'
  },

  flexRow2: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    
  },

  chart: {
        minWidth: '500px',
        width: '100%',
  },

  ufeaturedlist: {
    listStyle: 'none',
    display: 'inline',
  },

  featuredlist: {
    listStyle: 'none',
    display: 'inline',
    fontWeight: 300
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  userOptions: {
      marginTop: '20px',
      minHeight: '400px',
      width: '100%'
  },

  statesChart: {
    minHeight: '400px',
    width: '100%'
},

  
  newUsers: {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column'   
  },

  blogs: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column'  
  },

  events: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column'    
  },

  trialPeriod: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column'  
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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


}));

// var listContainer = document.getElementById('ufeaturedList');
// var items = listContainer && listContainer.getElementsByClassName('featuredlist');

// for(var i=0; i<items && items.length; i++)
// {
//     items[i].addEventListener('click', function(){
//         var current = document.getElementsByClassName('activeItem')
//         current[0].className = current[0].className.replace('activeItem', '')
//         this.className += 'activeItem'
//     })
// }

const onClickItem = (classname) => {
    console.log(document.getElementsByClassName('listButton'))
    var items = document.getElementsByClassName('listButton')

    for(var i=0;i<items.length;i++)
    {
        items[i].className = items[i].className.replace(' activeItem', '')
        console.log(items[i].className)
    }

    var item = document.getElementsByClassName(classname)

    // console.log(item[0].className+=' activeItem')
    item[0].className+=' activeItem'
  }

function Dashboard (props){

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [people, setPeople] = React.useState(0)
    const [email, setEmail] = React.useState('')
    const [duration, setDuration] = React.useState(0)
    var [price, setPrice] = React.useState(0)

  
    const [data, setData] = useState(null)
    const statesArray = [ "Maharashtra", "Haryana", "Rajasthan", "Uttar Pradesh", "Chandigarh", "Bihar", "Madya Pradesh", "Punjab", "Delhi", "West Bengal"]
    const coursesArray = [ "CSE", "ECE", "Mech", "Civil", "Chem", "BioTech", "Electrical", "Aero", "PolyTech", "Textile"]
    const [donutChartData, setDonutChartData] = useState([])
    const [coursesChartData, setCoursesChartData] = useState([])
    var list=[]
    var list2=[]
    
    const reqStatesCollegeFunc = (state) => {
            axios.get(`${baseUrl}/colleges/state/${state}`)
            .then((res) => {
                console.log(res.data.length)
                list.push({ type: state, value: res.data.length})
                setDonutChartData(list)
                setTimeout(() => console.log('yes'), 2000)
            })
            .catch((err) => console.log(err));
        
    }

    const reqCoursesCollegeFunc = (course) => {
        axios.get(`${baseUrl}/colleges/courses/${course}`)
        .then((res) => {
            console.log(res.data.length)
            list2.push({ type: course, value: res.data.length})
            setCoursesChartData(list2)
            setTimeout(() => console.log('yes'), 1000)
        })
        .catch((err) => console.log(err));
    
}

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

      var config2 = {
        appendPadding: 10,
        data: coursesChartData,
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
              return 'Courses';
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

      const myFunc2 = (chart, event) => {
    
        if(event.type=="interval:click"){
          console.log(event.data.data.type)
          axios.get(baseUrl+'/colleges/courses/'+`${event.data.data.type}`)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
        }
      }

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

        for(let i=0; i<statesArray.length; i++)
        {
            reqStatesCollegeFunc(statesArray[i]);
        }

        // for(let i=0; i<coursesArray.length; i++)
        // {
        //     reqCoursesCollegeFunc(coursesArray[i]);
        // }

        
        console.log(donutChartData)
        
    },[])

    
    const rows = data;
    console.log(rows)

    const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addPeople = () => {
      setPeople(people+1)
      setEmail('')
      handleClose()
  }

  

  price = 5*duration + 10*people + 500

  
  
  const valuetext = (value) => {
    return `${value} min`;
  }

 
    
    return (
        <div style={{backgroundColor: '#F5F5F5'}} >
            <Paper className={classes.topBar}  elevation={2}>
                <nav className={classes.navBar}>
                    <ul className={classes.ulist}>
                        <li className={classes.list} style={{fontSize: '18px', fontWeight: 'bolder'}}>Dashboard</li>
                        <li className={classes.list}><Button><AddCircleOutlineIcon /><span>Colleges List</span></Button></li>
                        <li className={classes.list}><Button><VisibilityIcon /><span>Students list</span></Button></li>
                        

                    </ul>
                    <div className={classes.help}>
                        <Button><HelpIcon style={{color: themeColor, fontSize: '35px'}}/>Help</Button>
                    </div>
                </nav>
            </Paper>
            <Grid container>
                <Grid item xs={12} sm={12} lg={9} >
                    <Paper className={classes.chartPaper}>
                        <div className={classes.flexRow2}>
                            <div><Button><DateRangeIcon style={{color: themeColor}}/>Top Ranked Colleges</Button></div>
                            <div>
                                {/* <ul className={classes.ufeaturedlist} id='ufeaturedList'>
                                    <li className={classes.featuredlist}><button className='listButton newSignups buttonClass ' onClick={() => onClickItem('newSignups')}>New Signups</button></li>
                                    <li className={classes.featuredlist}><button className='listButton revenue buttonClass' onClick={(id) => onClickItem('revenue')}>Revenue</button></li>
                                    <li className={classes.featuredlist}><button className='listButton productSales buttonClass' onClick={(id) => onClickItem('productSales')}>Product Sales</button></li>
                                    <li className={classes.featuredlist}><button className='listButton activeLearners buttonClass' onClick={(id) => onClickItem('activeLearners')}>Active Learners</button></li>
                                    <li className={classes.featuredlist}>
                                         <FormControl variant="filled" className={classes.formControl}>
                                           
                                            <NativeSelect
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            >
                                                <option value="">
                                                    None
                                                </option>
                                                <option value={'last 1 month'} selected={true}>Last 1 month</option>
                                                <option value={'last 5 months'}>Last 5 month</option>
                                                <option value={'last 1 year'}>Last 1 year</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className={classes.chart}>
                        <Table dataSource={rows}>

                                <Column title="College Name" dataIndex="name" key="name"  render= {text => <a href={`/colleges/name/${text}`}>{text}</a> }/>
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
                            {/* <Chart className={classes.chart} height={200} data={data}>
                                <ArgumentAxis className={classes.chart}/>
                                <ValueAxis showGrid={false}/>

                                <LineSeries valueField="value" argumentField="argument" className={classes.chart} color={themeColor} />
                            </Chart> */}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} lg={3} >
                    <Paper className={classes.userOptions}>
                        <Grid container style={{paddingTop: '40px'}}>
                            <Grid item xs={6} sm={4} lg={6} >
                                <div style={{cursor: 'pointer'}} onclick={() => this.props.history.push('/home')}>
                                <div><SchoolIcon style={{color: themeColor, fontSize: '50px'}}/></div>
                                <div>All Colleges</div>
                                <div style={{fontSize: '25px', fontWeight: '600'}}>100</div>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={4} lg={6}>
                                <div><LocalLibraryIcon style={{color: themeColor, fontSize: '50px'}}/></div>
                                <div>Courses offered</div>
                                <div style={{fontSize: '25px', fontWeight: '600'}}>10</div>
                            </Grid>
                            {/* <Grid item xs={6} sm={4} lg={4}>
                                <div><LocalMallIcon style={{color: themeColor, fontSize: '50px'}}/></div>
                                <div>30 days sale</div>
                                <div style={{fontSize: '25px', fontWeight: '600'}}>0</div>
                            </Grid> */}
                        </Grid>
                        <Grid container style={{paddingTop: '40px'}}>
                            <Grid item xs={6} sm={4} lg={6}>
                                <div><PersonOutlineIcon style={{color: themeColor, fontSize: '50px'}}/></div>
                                <div>Students Enrolled</div>
                                <div style={{fontSize: '25px', fontWeight: '600'}}>10,000</div>
                            </Grid>
                            <Grid item xs={6} sm={4} lg={6}>
                                <div><ListAltIcon style={{color: themeColor, fontSize: '50px'}}/></div>
                                <div>Daily Visits</div>
                                <div style={{fontSize: '25px', fontWeight: '600'}}> More than 10K </div>
                            </Grid>
                            {/* <Grid item xs={6} sm={4} lg={4}>
                                <div><LoyaltyIcon style={{color: themeColor, fontSize: '50px'}}/></div>
                                <div>Course Categories</div>
                                <div style={{fontSize: '25px', fontWeight: '600'}}>0</div>
                            </Grid> */}
                        </Grid>
                    </Paper>
                    <Paper className={classes.statesChart}>
                    <div><Button><DateRangeIcon style={{color: themeColor}}/>No. of Colleges in States(%)</Button></div>
                    <Pie {...config}  onEvent={(chart, event) => myFunc(chart, event)}/>
                    </Paper>
                    {/* <Paper className={classes.statesChart}>
                    <div><Button><DateRangeIcon style={{color: themeColor}}/>Courses offered(%)</Button></div>
                    <Pie {...config2}  onEvent={(chart, event) => myFunc2(chart, event)}/>
                    </Paper> */}
                </Grid>

            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={3}>
                    {/* <Paper className={classes.newUsers}>
                        <div style={{justifyContent: 'start', marginTop: '10px',marginLeft: '10px', display: 'flex'}}>
                            <PersonOutlineIcon style={{color: themeColor}} />
                            <span style={{ justifyContent: 'center'}}>New Users</span>
                            <Chip label="See all" component="a" href="#" size='small' clickable style={{ backgroundColor: themeColor, color: '#ffffff', marginLeft: '10px'}} />
                        </div>
                        <div style={{justifyContent: 'start', marginTop: '10px',marginLeft: '10px', display: 'flex'}}>
                            <div><SentimentSatisfiedSharpIcon style={{fontSize:"40px"}}/></div>
                            <div>
                                <div>HubX</div>
                                <div> 24 min</div>
                            </div>
                        </div>
                    </Paper> */}
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    {/* <Paper className={classes.blogs}>
                        <div style={{justifyContent: 'start', marginTop: '10px',marginLeft: '10px', display: 'flex'}}>
                            <ListAltIcon  />
                            <span style={{ justifyContent: 'center'}}>How to sell courses blogs</span>
                            <Chip label="See all" component="a" href="#" size='small' clickable style={{ backgroundColor: themeColor, color: '#ffffff', marginLeft: '10px'}} />
                        </div>
                        <ul style={{justifyContent: 'start', marginTop: '10px',marginLeft: '10px', display: 'flex', flexDirection: 'column'}}>
                            <li style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px', marginRight: '10px'}}>
                                <div style={{width: '70%', color: themeColor, cursor: 'pointer'}}>Blended Learning: Why it matters and how to apply</div>
                                <div>7 days ago</div>
                            </li>
                            <li style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px', marginRight: '10px'}}>
                                <div style={{width: '70%', color: themeColor, cursor: 'pointer'}}>Blended Learning: Why it matters and how to apply</div>
                                <div>7 days ago</div>
                            </li>
                            <li style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px', marginRight: '10px'}}>
                                <div style={{width: '70%', color: themeColor, cursor: 'pointer'}}>Blended Learning: Why it matters and how to apply</div>
                                <div>7 days ago</div>
                            </li>
                        </ul>
                    </Paper> */}
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    {/* <Paper className={classes.events}>
                        <div style={{justifyContent: 'start', marginTop: '10px',marginLeft: '10px', display: 'flex'}}>
                            <TimelineIcon  />
                            <span style={{ justifyContent: 'center'}}>Events Logs</span>
                            <Chip label="See all" component="a" href="#" size='small' clickable style={{ backgroundColor: themeColor, color: '#ffffff', marginLeft: '10px'}} />
                        </div>
                        <ul style={{justifyContent: 'start', marginTop: '10px',marginLeft: '10px', display: 'flex', flexDirection: 'column'}}>
                            <li style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px', marginRight: '10px'}}>
                                <div style={{display: 'flex', flexDirection: 'row',width: '70%', cursor: 'pointer'}}>
                                    <div><VpnKeySharpIcon /></div>
                                    <div>
                                            <div style={{color: themeColor}}>HubX</div>
                                            <div>Logged in</div>
                                            <div style={{color: themeColor}}>more info</div>
                                    </div>
                                </div>
                                <div>20 min</div>
                            </li>
                           
                        </ul>
                    </Paper> */}
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    {/* <Paper className={classes.trialPeriod}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div style={{fontSize: '20px', fontWeight: 'bold', marginLeft: '10px', marginTop: '10px'}}>Trial Period</div>
                            <div style={{marginRight: '20px', marginTop: '10px'}}><HourglassEmptyIcon style={{color: themeColor, fontSize: '40px'}}/></div>
                        </div>
                        <div>
                            <Paper className={classes.circle} elevation={3}>
                                30 days left
                            </Paper>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: '20px', marginRight: '20px'}}>
                            <Chip label="Upgrade Now! >>" component="a" href="#" size='small' clickable style={{ backgroundColor: '#ED0394', color: '#ffffff', marginLeft: '10px'}}/>
                        </div>
                    </Paper> */}
                    
                </Grid>
            </Grid>
            {/* <Button variant='contained' style={{marginTop: '20px', backgroundColor: themeColor}} onClick={handleClickOpen}>Invite</Button> */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">No. of People: {people}</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    You can add the email of the person to invite amd then click add to event
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <Typography id="discrete-slider-always" gutterBottom>
                    Duration of Event (min)
                </Typography>
                <Slider
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-always"
                    step={10}
                    value={duration}
                    onChange={(event,value) => setDuration(value)}
                    valueLabelDisplay="on"
                    />
                <PieChart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['No. of People', people*10],
                        ['Duration of Event', duration*5],
                        ['Price', price],
                        
                    ]}
                    options={{
                        title: 'The Price Calculator',
                        // Just add this option
                        slices: {
                            0: { color: '#44475b' },
                            1: { color: '#5367ff' },
                            2: {color: '#00d09c'}
                          },
                        pieHole: 0.4,
                    }}
                   
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={addPeople} color="primary" disabled={email=="" ? true : false} >
                    Add to event
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Dashboard


// themeColor
// '#00d09c' 
// '#60E7C6'