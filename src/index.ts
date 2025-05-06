// Dynamic task runner for practice tasks

import path from "path";

async function runTask(taskName: string) {
  try {
    // Use relative imports for ts-node compatibility
    const solutionModule = await import(`../practice/${taskName}/solution.ts`);
    const dataInputModule = await import(
      `../practice/${taskName}/data-input.ts`
    );

    const solution = solutionModule.solution;
    const inputData = dataInputModule.inputData;

    if (!solution || !inputData) {
      console.error(
        "Could not find solution or inputData export in the task module."
      );
      process.exit(1);
    }

    inputData.forEach((data: number[], idx: number) => {
      console.log(`\nTest case #${idx + 1}: [${data.join(", ")}]`);
      solution(data);
    });
  } catch (err) {
    console.error(`Failed to run task '${taskName}':`, err);
    process.exit(1);
  }
}

// Get task name from command line arguments
const [, , taskName] = process.argv;
if (!taskName) {
  console.error(
    "Please provide a task name, e.g. 'npx ts-node src/index.ts task-1'"
  );
  process.exit(1);
}

runTask(taskName);
