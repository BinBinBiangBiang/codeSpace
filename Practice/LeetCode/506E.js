var findRelativeRanks = function(score) {
  let scoreCopy = score;
  const map = new Map();
  const len = score.length;
  scoreCopy.sort((a,b)=>b-a);
  console.log(score);
  console.log(scoreCopy);
  for(let i = 0 ;i<len;i++){
      map.set(scoreCopy[i],(i+1)+'')
  }
  console.log(map);
  const first = scoreCopy[0];
  const second = scoreCopy[1];
  const third = scoreCopy[2];
  let ans =[];
  for(let i = 0;i<score.length;i++){
      if(score[i] == first){
          ans.push('Gold Medal');
      }else if(score[i] == second){
          ans.push('Silver Medal')
      }else if(score[i] == third){
          ans.push('Bronze Medal');
      }else{
          ans.push(map.get(score[i]));
      }
  }
  return ans;
};

score = [10,3,8,9,4]

console.log(findRelativeRanks(score));