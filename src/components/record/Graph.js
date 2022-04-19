import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Graph({ records, type }) {
  return (
    <GraphContainer>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart width="100%" height={250} data={records}>
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

Graph.propTypes = {
  records: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};

export default Graph;

const GraphContainer = styled.div`
  margin: 30px 0;
  transform: translateX(-25px);
`;