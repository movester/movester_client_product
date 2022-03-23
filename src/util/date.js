const formatDate = (() => {
  const format = n => (n < 10 ? '0' + n : n + '');
  return date => `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
})();

// yyyy-mm-dd로 오늘 날짜 출력
const getToday = formatDate(new Date());

export default getToday;
