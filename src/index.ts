// Entry point for the TypeScript project
function solution(A: number[]): number {
  if (A.length <= 1) {
    return 0; // Can't make any trades with 0 or 1 prices
  }

  let holdingAsset = true; // We start with 1 asset

  // First, let's sell our initial asset at the best possible price
  let initialSellPrice = Math.max(...A);
  let initialSellIndex = A.indexOf(initialSellPrice);

  // If the max price is at the end, we can just sell our initial asset
  if (initialSellIndex === A.length - 1) {
    return initialSellPrice;
  }

  // Process the prices to maximize profit
  let currentIncome = 0;

  for (let i = 0; i < A.length; i++) {
    // If we're holding an asset and the next price is lower, sell now
    if (holdingAsset && i < A.length - 1 && A[i] > A[i + 1]) {
      currentIncome += A[i];
      holdingAsset = false;
    }
    // If we're not holding an asset and the next price is higher, buy now
    else if (!holdingAsset && i < A.length - 1 && A[i] < A[i + 1]) {
      currentIncome -= A[i];
      holdingAsset = true;
    }
    // If we're at the last price and holding an asset, sell it
    else if (holdingAsset && i === A.length - 1) {
      currentIncome += A[i];
    }
  }

  // Take the modulo as required
  return currentIncome % 1000000000;
}
// Example usage
console.log(solution([4, 1, 2, 3])); // Output: 6
console.log(solution([1, 2, 3, 3, 2, 1, 5])); // Output: 7
console.log(solution([1000000000, 1, 2, 2, 1000000000, 1, 1000000000])); // Output: 999999998;
