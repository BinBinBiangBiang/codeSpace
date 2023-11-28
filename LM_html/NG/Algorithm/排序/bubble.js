let arr = [3,2,1,4,5,2,3,4,2,7]

// arr.sort((a,b)=>{
//   return a-b;
// })

// console.log(arr);

function bubleSort(arr){
  const len  = arr.length
  for(let i = 0; i < len-1; i++){
    for(let j = i+1; j < len; j++){
      if(arr[i] > arr[j]){
        // let temp  = arr[j];
        // arr[j] = arr[i]
        // arr[i] = temp;
        [arr[i],arr[j]] = [arr[j],arr[i]]
      }
    }
  }
  return arr;
}

console.log(bubleSort(arr));