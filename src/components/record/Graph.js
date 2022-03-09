import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Graph({ records, type }) {
  return (
    <GraphContainer>
      <ResponsiveContainer width={400} height={200}>
        <LineChart width={400} height={200} data={records}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={type === 'shoulder' ? [-10, 30] : [-15, 40]} />
          <Tooltip />
          <Line type="monotone" dataKey="record" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
}

export default Graph;

const GraphContainer = styled.div`
  margin: 10px auto;
`;
