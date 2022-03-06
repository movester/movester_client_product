import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

function Graph({ records }) {
  const [data] = useState([10, 20, 30, 40, 50, 60]);
  const svgRef = useRef();
  console.log(records);

  useEffect(() => {
    // setting up svg
    const w = 200;
    const h = 100;
    const svg = d3
      .select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('background', '#fff')
      .style('margin-top', '50')
      .style('overflow', 'visible');
    // setting the scailing
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([-60, h]).range([h, 0]);
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);
    // setting the axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(i => i + 1);
    const yAxis = d3
      .axisLeft(yScale)
      .ticks(data.length)
      .tickFormat(i => i);
    svg.append('g').call(xAxis).attr('transform', `translate(0, ${h})`);
    svg.append('g').call(yAxis);
    // setting up the data for the svg
    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr('d', d => generateScaledLine(d))
      .attr('fill', 'none')
      .attr('stroke', 'black'); // 선 색상 변경
    svg
      .selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d, i) => xScale(i))
      .attr('cy', d => yScale(d))
      .attr('r', 3);
    // .on('mouseover', (a, b, c) => {
    //   console.log(a, b, c);
    //   svg.attr('class', 'focus');
    // })
    // .on('mouseout', () => {});
  }, [records]);
  return (
    <div style={{ margin: '10px 20px 20px' }}>
      <svg ref={svgRef} />
    </div>
  );
}

Graph.propTypes = {
  records: PropTypes.arrayOf.isRequired,
};

export default Graph;
