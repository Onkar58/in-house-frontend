import React, { useEffect, useState } from 'react'
import { AgChartsReact } from "ag-charts-react"
import "ag-charts-enterprise";

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


const Questions = ({ questionsInfo }) => {
  const getData = () => {
    return [
      {
        // all: questionsInfo["all"],
        radiusKey: "Solved",
        easy:questionsInfo["easy"]["solved"],
        medium:questionsInfo["medium"]["solved"],
        hard:questionsInfo["hard"]["solved"],
      }
    ]
  }
  const [options, setOptions] = useState({
    title: {
      text: "Number of Questions Solved By a Student",
    },
    data: getData(),
    series: [
      { type: 'radial-bar', radiusKey: 'radiusKey', angleKey: 'easy', angleName: 'Easy' },
      { type: 'radial-bar', radiusKey: 'radiusKey', angleKey: 'medium', angleName: 'Medium' },
      { type: 'radial-bar', radiusKey: 'radiusKey', angleKey: 'hard', angleName: 'Hard' },
    ],
    theme: myTheme,
    background: {
      fill: "rgba(0,0,0,0)"
    }
  });

  return (
    <div className='w-full relative'>
      <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[90%] text-white text-xl' title='Total Questions Solved'>{questionsInfo.all.solved}</p>
      <AgChartsReact options={options} />;
    </div>
  )
}

export default Questions