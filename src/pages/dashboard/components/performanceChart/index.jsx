import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { module: 'Module 1', percentage: 85 },
    { module: 'Module 2', percentage: 70 },
    { module: 'Module 3', percentage: 50 },
    { module: 'Module 4', percentage: 90 },
    { module: 'Module 5', percentage: 60 },
];

const PerformanceChart = () => {
    return (
        <div className="w-full h-[90%]">
            <h2 className="text-white text-center mb-4 text-xl font-semibold">
                Performance Overview
            </h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: -10,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="module" tick={{ fill: '#FFFFFF' }}
                    className='text-sm' />
                    <YAxis
                        domain={[0, 100]}
                        ticks={[0, 20, 40, 60, 80, 100]}
                        tick={{ fill: '#FFFFFF' }}
                        orientation="right"
                        axisLine={false}
                        className='text-sm'
                    />
                    <Tooltip />
                    <Bar dataKey="percentage" fill="#EB5017" barSize={40} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PerformanceChart;
