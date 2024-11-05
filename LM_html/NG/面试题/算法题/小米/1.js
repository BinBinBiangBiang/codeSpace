function test(input) {
  const lines = input.split('\n');
  const num = parseInt(lines[0], 10);

  const allLetters = new Set();
  for (let i = 2; i < lines.length; i++) {
    for (const letter of lines[i].trim()) {
      allLetters.add(letter);
    }
  }

  // 构建 knowLetters 集合
  const knowLetters = new Set([...allLetters].slice(0, 3));

  let index = 1;
  const result = [];

  for (let i = 0; i < num; i++) {
    const numKeyword = parseInt(lines[index++], 10);
    let total = 0;

    for (let j = 0; j < numKeyword; j++) {
      const word = lines[index++].trim();
      if (word.split('').every(letter => knowLetters.has(letter))) {
        total += word.length;
      }
    }

    result.push(total);
  }

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

let input = `3
2
aabbcc
cbcd
4
abbc
accd
ccdb
bbdd
1
abcd`;
test(input);