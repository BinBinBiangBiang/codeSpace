const formateDate = (date) =>{
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month < 10 ? '0' + month : month;
  day = day < 10? '0' + day : day;
  return `${year}年${month}月${day}日`
}

module.exports = {
  formateDate
}