// Task 1 solution
export function solution(A: number[]): number {
  const N = A.length;
  let count = 0;
  let i = 0;

  while (i < N) {
    const next = (i + 1) % N;
    const sum = A[i] + A[next];

    // console.log(
    //   `Checking pair (${A[i]}, ${A[next]}): Sum = ${sum} -> ${
    //     sum % 2 === 0 ? "EVEN" : "ODD"
    //   }`
    // );

    if (sum % 2 === 0) {
      // console.log(`--> Pair accepted: (${A[i]}, ${A[next]})`);
      count++;
      i += 2; // Skip both i and next
      if (i === N) break; // Edge case: if i == N, stop
    } else {
      i += 1; // Move to next neighbor
    }
  }

  console.log(`Total pairs formed: ${count}`);
  return count;
}
