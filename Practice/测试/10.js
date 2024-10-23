function cssStyle2DomStyle(sName) {
  // 填写JavaScript
  let arr = sName.split('-')
  let res = ''
  if (sName.charAt(0) === '-') {
    arr = arr.slice(1)
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      res += arr[i]
      continue
    } else {
      res += arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
  }
  return res
}

console.log(cssStyle2DomStyle('border-top-color'))