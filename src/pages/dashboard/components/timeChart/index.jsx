import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Sun',
        uv: 0,
        amt: 0,
    },
    {
        name: 'Mon',
        uv: 0,
        amt: 0,
    },
    {
        name: 'Tue',
        uv: 0,
        amt: 0,
    },
    {
        name: 'Wed',
        uv: 0,
        amt: 0,
    },
    {
        name: 'Thur',
        uv: 0,
        amt: 0,
    },
    {
        name: 'Fri',
        uv: 0,
        amt: 0,
    },
    {
        name: 'Sat',
        uv: 0,
        amt: 0,
    },
];

const TimeChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={'100%'}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 20,
                    left: -30,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fill: '#FFFFFF' }} className='text-sm' />
                <YAxis
                    domain={[0, 9]}
                    tick={{ fill: '#FFFFFF' }}
                    ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    interval={0} className='text-sm'
                />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#EB5017"
                    fill="#8F7875"
                    // dot={{ stroke: '#EB5017', fill: '#EB5017', strokeWidth: 2, r: 4 }} // Always show dots
                    // activeDot={{ r: 6 }} // Make the dot larger on hover
                    dot={{ fill: '#EB5017', r: 4 }} // Always show filled dots
                    activeDot={false} // Disable hover effect
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default TimeChart;
