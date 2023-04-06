import React from 'react'
import {
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend
} from 'recharts'

const BarChartContainer = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={data} margin={{ top: 50}}>
        <Bar dataKey='count' fill="#60a5fa" barSize={80}/>
        <CartesianGrid stroke='#ccc' strokeDasharray='3 3'/>
        <XAxis dataKey='date'/>
        <YAxis allowDecimals={false}/>
        <Legend />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartContainer