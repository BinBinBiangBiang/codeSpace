// 1,234,567  国外标准货币表示方法

function formatNumberWithCommas(number){
  if(typeof number !== 'number'){
    return ;
  }

  number += '';
  let [interger, decimal] = number.split('.')

  // 内部函数封装 复用 整数和小数部分都要千分位
  const doSplit = (num,isInterger = true)=>{
    if(num === '') return '';

    if(isInterger) num = num.split('').reverese();
    let str = [];
    for(let i = 0; i < num.length; i++){
      if(i != 0 && i % 3 == 0){
        str.push(',');
      }
      str.push(num[i]);
    }

    if(isInterger) return str.reverse().join('')
  }

  interger = doSplit(interger);
  decimal = doSplit(decimal,false);
  return interger + '.' + decimal === '' ? '' : decimal;
}