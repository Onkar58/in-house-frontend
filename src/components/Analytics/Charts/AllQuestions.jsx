import React, { useState } from 'react'
import { AgChartsReact } from "ag-charts-react"

var myTheme = {
  baseTheme: 'ag-default-dark',
  palette: {
      fills: ['#4339F2', '#34B53A', '#FFB200'],
      strokes: ['black'],
  },
  overrides: {
      common: {
          title: {
              fontSize: 24,
          },
      },
      bar: {
          series: {
              
          },
      },
  },
};


const AllQuestions = ({ inputData }) => {
  const getData = () => {
    return inputData.map(user => (
      {
        "username": user?.username,
        "fundamental": user?.fundamental?.reduce((total, tag) => total + tag.problemsSolved, 0),
        "intermediate": user?.intermediate?.reduce((total, tag) => total + tag.problemsSolved, 0),
        "advanced": user?.advanced?.reduce((total, tag) => total + tag.problemsSolved, 0),
      }
    ))
  } 
  console.log("ge", getData());
  const [options, setOptions] = useState(
    {
      title: {
        text: "Students Skillsets" 
      },
      data: getData(),
      series: [
          {
              type: "bar",
              xKey: "username",
              yKey: "fundamental",
              yName: "fundamental",
              stacked: true,
          },
          {
              type: "bar",
              xKey: "username",
              yKey: "intermediate",
              yName: "intermediate",
              stacked: true,
          },
          {
              type: "bar",
              xKey: "username",
              yKey: "advanced",
              yName: "advanced",
              stacked: true,
          },
      ],
      theme: myTheme,
      background: {
        fill: "rgba(255,255,255,0.2)"
      }
  });
  return (
    <div className='w-1/2 text-red-500'>
      {
        // !loading && 
        <AgChartsReact options={options} /> 
      }
    </div>
  )
}

export default AllQuestions