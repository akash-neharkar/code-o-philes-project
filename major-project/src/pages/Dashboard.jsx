import { useState } from 'react';
import "./Dashboard.css"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  // Calendar styling

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <h1 className="chart-heading">Main Dashboard</h1>
      <h3 className="chart-heading">Your Daily Analysis</h3>
      
      {/* LineChart */}
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data} height={300} margin={{ top: 5, right: 100, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'white' }} />
          <Legend />
          <Line dataKey="amt" type="monotone" stroke='red' activeDot={{ r: 8 }} />
          <Line dataKey="uv" type="monotone" stroke='green' activeDot={{ r: 8 }} />
          <Line dataKey="pv" type="monotone" stroke='blue' activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      {/* Synchronized AreaCharts */}
      <div style={{ width: '100%' }}>
        <h4>A demo of synchronized AreaCharts</h4>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{ top: 10, right: 100, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{ top: 10, right: 100, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Flexbox Container for PieChart on the left and Calendar on the right */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
        
        {/* PieChart */}
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h2>Pie Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Calendar */}
        <div style={{ flex: 1 }}>
          <h2>Select a Date:</h2>
          <Calendar onChange={setDate} value={date} />
          <p>Selected Date: {date.toDateString()}</p>
        </div>
      </div>
    </>
  );
}

export default App;
