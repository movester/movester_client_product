const today = new Date();
const lastMonth = today.getMonth();

const getDate = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  lastMonth,
  lastDateOfCurMonth: new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(),
  lastDateOfLastMonth: new Date(today.getFullYear(), lastMonth, 0).getDate(),
};

export default getDate;
