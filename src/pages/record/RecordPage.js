import React, { useEffect, useState } from 'react';
import axios from '../../services/defaultClient';

import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import Record from '../../components/record/Record';

function RecordPage() {
  const [sholuderRecords, setSholuderRecords] = useState([]);
  const [legRecords, setLegRecords] = useState([]);
  useEffect(async () => {
    try {
      const { data: sholuder } = await axios.get('records/graph/1');
      const { data: leg } = await axios.get('records/graph/2');

      setSholuderRecords(sholuder.data);
      setLegRecords(leg.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Main type="record">
      <Nav />
      <Record sholuderRecords={sholuderRecords} legRecords={legRecords} />
    </Main>
  );
}

export default RecordPage;
