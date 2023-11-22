// 599.假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

// 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。

 

// 示例 1:

// 输入: list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// 输出: ["Shogun"]
// 解释: 他们唯一共同喜爱的餐厅是“Shogun”。
// 示例 2:

// 输入:list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["KFC", "Shogun", "Burger King"]
// 输出: ["Shogun"]
// 解释: 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)。
 

var findRestaurant = function (list1, list2) {
  const map = new Map();
  const len1 = list1.length;
  const len2 = list2.length;
  let min = len1 + len2;
  let ans = [];
  for (let i = 0; i < len1; i++) {
      const curList1 = list1[i];
      map.set(curList1, i);
  }
  for (let j = 0; j < len2; j++) {
      const curList2 = list2[j];
      // if(map.get(curList2)+j > min){
      //     break;
      // }
      if (map.has(curList2)) {
          if((map.get(curList2) + j) < min){
              ans.length = 0;
              ans.push(curList2);
              min = map.get(curList2) + j;
          }else if(map.get(curList2) + j == min){
              ans.push(curList2)
          }
          
      }
  }
  return ans;
};