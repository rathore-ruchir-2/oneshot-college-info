import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import baseUrl from '../config'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function CollegeCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const college = props.college
    return (
      <Card className={classes.root} style={{margin: '10px 10px 10px 10px'}}>
        <CardContent>
          
          <Typography variant="h5" component="h2">
                {college.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {college.city}, {college.state}
          </Typography>
         
        </CardContent>
        <CardActions>
             <a href={`/colleges/name/${college.name}`} style={{textDecoration: 'none', color: 'black'}}><Button size="small">Visit</Button></a>
        </CardActions>
      </Card>
    );
  }
  
  