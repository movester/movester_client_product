import axios from './defaultClient';

const userAPI = {
  fetchRecordTenEach() {
    return axios.get(`/records/summary`);
  },
  fetchRecordTypeByDates(payload) {
    const { type, startYear, startMonth, startDate, endYear, endMonth, endDate } = payload;
    return axios.get(
      `/records/search/${type}?startYear=${startYear}&startMonth=${startMonth}&startDate=${startDate}&endYear=${endYear}&endMonth=${endMonth}&endDate=${endDate}`
    );
  },
  fetchAddRecord(payload) {
    return axios.post('/records', payload);
  },
  fetchModifyRecord(payload) {
    return axios.patch('/records', payload);
  },
};

export default userAPI;
