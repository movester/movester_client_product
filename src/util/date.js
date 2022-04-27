const today = new Date();
const lastMonth = today.getMonth();

const formatDate = (() => {
  const format = n => (n < 10 ? '0' + n : n + '');
  return date => `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
})();

const getDate = {
  today: formatDate(today),
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  lastMonth,
  lastDateOfCurMonth: new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(),
  lastDateOfLastMonth: new Date(today.getFullYear(), lastMonth, 0).getDate(),
};

export default getDate;
