import React, { useEffect, useState } from 'react';
import axios from '../../services/defaultClient';

import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import Record from '../../components/record/Record';

function RecordPage() {
  useEffect(() => window.scrollTo(0, 0));
  const [shoulderecords, setShoulderRecords] = useState([]);
  const [legRecords, setLegRecords] = useState([]);
  useEffect(async () => {
    try {
      const { data: shoulder } = await axios.get('records/graph/1');
      const { data: leg } = await axios.get('records/graph/2');

      setShoulderRecords(shoulder.data);
      setLegRecords(leg.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Main type="record">
      <Nav />
      <Record shoulderecords={shoulderecords} legRecords={legRecords} />
    </Main>
  );
}

export default RecordPage;
