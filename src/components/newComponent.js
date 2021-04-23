import React from 'react';
import { Pie } from '@ant-design/charts';
import axios from 'axios';
import {baseUrl} from '../config'





function New(){
  var data = [
    {
      type: 'CSE',
      value: 27,
    },
    {
      type: 'ECE',
      value: 25,
    },
    {
      type: 'BioTech',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
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
          return 'AntV\nG2Plot';
        },
      },
    },
  };

  const myFunc = (chart, event) => {
    
    if(event.type=="interval:click"){
      console.log(event.data.data.type)
      axios.get(baseUrl+'/colleges/courses/'+`${event.data.data.type}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    }
  }
    return (
        <div>
            <Pie {...config}  onEvent={(chart, event) => myFunc(chart, event)}/>
            </div>
    );
};

export default New