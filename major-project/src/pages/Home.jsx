import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Meter 1',
          cu: 1362,
          pv: 2400,
          amt: 75,
        },
        {
          name: 'Meter 2',
          cu: 2695,
          pv: 1398,
          amt: 100,
        },
        {
          name: 'Meter 3',
          cu: 6543,
          pv: 5800,
          amt: 125,
        },
        {
          name: 'Meter 4',
          cu: 2387,
          pv: 1908,
          amt: 150,
        },
        {
          name: 'Meter 5',
          cu: 4698,
          pv: 4800,
          amt: 175,
        },
        {
          name: 'Meter 6',
          cu: 2390,
          pv: 1800,
          amt: 200,
        },
        {
          name: 'Meter 7',
          cu: 3490,
          pv: 4300,
          amt: 225,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title' >
            <h3 style={{ color: 'blue' }}>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DATA</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>7</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>GRAPHS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>2</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>7</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>RECOMMENDATIONS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>1</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="cu" fill="#82ca9d" />
               
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="cu" stroke="#82ca9d" />
                <Line type="monotone" dataKey="amt" stroke="#f50707" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home
