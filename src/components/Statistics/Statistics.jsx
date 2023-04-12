import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const data01 = [
        { name: "Assignment 1", mark: 60 },
        { name: "Assignment 2", mark: 59 },
        { name: "Assignment 3", mark: 27 },
        { name: "Assignment 4", mark: 55 },
        { name: "Assignment 5", mark: 60 },
        { name: "Assignment 6", mark: 9 },
        { name: "Assignment 7", mark: 60 },
        { name: "Assignment 8", mark: 56 },
    ];

    // const data01 = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
    //     { name: 'Group C', value: 300 },
    //     { name: 'Group D', value: 200 },
    //     { name: 'Group E', value: 278 },
    //     { name: 'Group F', value: 189 },
    //   ];
      


    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3}>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="mark"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;