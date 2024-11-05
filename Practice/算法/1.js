// 给定一个二叉树和一个数字n,判断二叉树中是否有一个路径之和为 n

// n 为 22，二叉树的定义如下:
let tree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7
      },
      right: {
        val: 2
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 8,
      right: {
        val: 1
      }
    },
    right: {
      val: 4
    }
  }
}

function test(tree, n, sum = 0, path = [], paths = []) {
  if (!tree) return false
  path.push(tree.val)
  sum += tree.val
  if (!tree.left && !tree.right && n === sum) {
      paths.push([...path])
  }

  let leftArr = test(tree.left, n, sum, path, paths)
  let rightArr = test(tree.right, n, sum, path, paths)
  path.pop()
  return leftArr || rightArr
}
let paths = []
console.log(test(tree, 22, 0, [], paths))
console.log(paths)