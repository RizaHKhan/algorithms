function solution(A) {
  const sortedA = A.sort((a, b) => a - b);

  if (sortedA[0] < -1 && !A.includes(1)) {
    return 1;
  }

  let uniqueVal = 0;
  let counter = 0;

  while (uniqueVal === 0) {
    if (!A.includes(counter) && counter > 0) {
      uniqueVal = counter;
    }

    counter++;
  }

  return uniqueVal;
}

console.log(solution([1, 2, 3]));
