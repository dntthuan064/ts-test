# QA Interview Preparation

This is a TypeScript workspace for structured learning and practice, including:

- **theory/**: Learning recipes, documentation, and interview preparation materials.
- **practice/**: Coding tasks, each with its own problem description, input data, and solution.
- **src/**: Entry point and dynamic runner for practice tasks.

---

## Getting Started

### Prerequisites
- Node.js version 18+
- npm

### Install dependencies
```zsh
npm install
```

---

## Running Practice Tasks

You can run any practice task dynamically. For example, to run `task-1`:

```zsh
npx ts-node src/index.ts task-1
```

or
```zsh 
npm run dev task-1
```


Each task folder in `practice/` should contain:
- `problem.md` – Task description
- `data-input.ts` – Array of test cases
- `solution.ts` – Solution function (exported as `solution`)

---

## Theory & Interview Preparation

See `theory/` for learning materials and interview guides.
