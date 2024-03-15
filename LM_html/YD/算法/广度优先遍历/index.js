function bfs(root){
  let queue = [root];
  while(queue.length){
    let node = queue.shift();
    console.log(node.val);
  }
}