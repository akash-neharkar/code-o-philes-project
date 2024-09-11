
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, AreaChart, Area } from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]
function App() {
  return (
    <>
    <h1 className="chart-heading"> 
      Your Daily Analysis

    </h1>
    <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data} margin={500} height={300} margin={{top:5, right:100, left:20, bottom:5}}>
          <CartesianGrid strokeDasharray="5 5"/>
          <XAxis dataKey="name" interval={'preserveStartEnd'}/>
          <YAxis></YAxis>
          <Tooltip contentStyle={{backgroundColor:'white'}}/>
          <Legend/>
          <Line dataKey="amt" type="monotone" stroke='red' activeDot={{r:8}}/>
          <Line dataKey="uv" type="monotone" stroke='green' activeDot={{r:8}}/>
          <Line dataKey="pv" type="monotone" stroke='green' activeDot={{r:8}}/>

        </LineChart>
        
    </ResponsiveContainer>

    <div style={{ width: '100%' }}>
        <h4>A demo of synchronized AreaCharts</h4>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 100,
              left: 0,
              bottom: 0,
            }}
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
            margin={{
              top: 10,
              right: 100,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default App;
