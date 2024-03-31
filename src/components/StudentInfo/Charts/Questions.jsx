import React, { useState } from 'react'
import {AgChartsReact} from "ag-charts-react"

const Questions = () => {
    const [options, setOptions] = useState({
        title: {
            text: "Apple's Revenue by Product Category",
        },
        subtitle: {
            text: "In Billion U.S. Dollars",
        },
        data: [
            {
                studentNo: 1,
                easy: 140,
                intermediate: 16,
                hard: 14,
              },
              {
                studentNo: 2,
                easy: 124,
                intermediate: 20,
                hard: 14,
                
              },
              {
                studentNo: 3,
                easy: 112,
                intermediate: 20,
                hard: 18,
              },
              {
                studentNo: 4,
                easy: 118,
                intermediate: 24,
                hard: 14,
              },
              {
                studentNo: 5,
                easy: 124,
                intermediate: 18,
                hard: 16,
              },
              {
                studentNo: 6,
                easy: 108,
                intermediate: 20,
                hard: 16,
              },
              {
                studentNo: 7,
                easy: 96,
                intermediate: 22,
                hard: 18,
              },
              {
                studentNo: 8,
                easy: 104,
                intermediate: 22,
                hard: 14,
              },
        ],
        series: [
            {
                type: "bar",
                xKey: "studentNo",
                yKey: "easy",
                yName: "easy",
                stacked: true,
            },
            {
                type: "bar",
                xKey: "studentNo",
                yKey: "intermediate",
                yName: "intermediate",
                stacked: true,
            },
            {
                type: "bar",
                xKey: "studentNo",
                yKey: "hard",
                yName: "hard",
                stacked: true,
            },
        ],
    });
    return (
        <div className='w-full'>
            <AgChartsReact options={options} />;
        </div>
    )
}

export default Questions