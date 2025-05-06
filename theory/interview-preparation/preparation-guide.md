# QA Interview Preparation Guide

## 1. **Current Process: Trunk-Based Release & Role as Release Manager**

### **Trunk-Based Development**

- All developers commit to a single branch (`main`/`master`).
- Promotes continuous integration and minimizes merge conflicts.

### **Responsibilities as Release Manager**

- **Version Control**: Ensure the `master` branch is always deployable.
- **CI/CD Pipeline Management**: Oversee automated builds and deployments.
- **Quality Assurance**: Coordinate pre-release testing.
- **Communication**: Liaise between dev, QA, and ops teams.
- **Risk Management**: Identify and mitigate release risks.

## 2. **Breaking Down Test Cases for a Requirement**

### **Steps to Design Test Cases**

1. **Requirement Analysis**: Understand functionality and acceptance criteria.
2. **Scenario Identification**:
   - Positive, negative, edge cases, and error conditions.
3. **Test Case Design**:
   - Test Case ID, Description, Pre-conditions, Steps, Expected Results, Priority.
4. **Review & Optimization**:
   - Remove redundancy, prioritize based on risk.

### **Key Considerations**

- **Traceability**: Map test cases to requirements.
- **Reusability**: Design for regression testing.
- **Maintainability**: Keep test cases concise.

## 3. **Managing Test Cases**

### **Best Practices**

- **Tools**: Notion, Jira.
- **Version Control**: Track changes over time.
- **Categorization**: Group by module/feature (e.g., "Login," "Checkout").
- **Status Tracking**: Update execution status (Passed/Failed/Blocked).
- **Regular Reviews**: Reflect requirement changes.

## 4. **Identifying BE vs. FE Defects**

### **Steps to Determine Defect Origin**

1. **Reproduce**: Observe where the defect occurs (UI vs. data).
2. **Logs**:
   - **Frontend**: Browser console errors (JavaScript/CSS).
   - **Backend**: Server logs (e.g., `500 Internal Server Error`).
3. **API Inspection**: Use Postman to validate responses.
4. **Collaboration**: Discuss with developers.

### **Indicators**

- **FE Defects**: UI misalignment, client-side validation errors.
- **BE Defects**: Incorrect data processing, database errors.

## 5. **API Testing**

### **HTTP Methods**

| Method     | Purpose       | Example                        |
| ---------- | ------------- | ------------------------------ |
| **GET**    | Retrieve data | `GET /users`                   |
| **POST**   | Create data   | `POST /users` (with JSON body) |
| **PUT**    | Update data   | `PUT /users/123`               |
| **DELETE** | Remove data   | `DELETE /users/123`            |

### **Key Testing Areas**

- **Status Codes**: Validate `200 OK`, `404 Not Found`, etc.
- **Response Time**: Ensure APIs meet SLAs (e.g., <500ms).
- **Data Validation**:
  - Schema validation (e.g., using [AJV](https://ajv.js.org/)).
  - Boundary testing (e.g., age: `-1`, `0`, `150`).
- **Authentication/Authorization**:
  - Test API keys, OAuth 2.0, and JWT tokens.
- **Error Handling**: Check for meaningful error messages.

### **Common Errors**

| Code  | Meaning        | Testing Focus       |
| ----- | -------------- | ------------------- |
| `400` | Bad Request    | Malformed input     |
| `401` | Unauthorized   | Invalid credentials |
| `403` | Forbidden      | Role-based access   |
| `500` | Internal Error | Server logs         |

### **API Automation Examples**

#### **Postman**

```javascript
// Test script
pm.test("Status code 200", () => pm.response.to.have.status(200));
pm.test("Valid schema", () => {
  const schema = { type: "object", properties: { id: { type: "number" } } };
  pm.response.to.have.jsonSchema(schema);
});
```
## 6. Automation: Frameworks & Tools

#### Tools
- Playwright: Cross-browser support (Chromium, Firefox, WebKit).
- Selenium: Browser automation for web apps.
- Cypress: End-to-end testing with real-time reloads.

#### TypeScript Fundamentals

- Static Typing: Define types for variables, parameters, and returns.
- Interfaces: Enforce object shapes (e.g., interface User { id: number }).
- Classes: Encapsulate logic (e.g., class LoginPage { ... }).

#### Playwright Best Practices
- **Page Object Model (POM):**

```tsx
class LoginPage {
  async login(username: string, password: string) {
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click('#login-btn');
  }
}
```
- **Parallel Execution:** Run tests across multiple workers.
- **Reporting:** Generate HTML reports with playwright-report.

## 7. Advanced Topics

### GraphQL Testing

- **Queries**: Validate nested data structures.
- **Mutations**: Test data creation/updates.
- **Tools**: Apollo Client, GraphQL Playground.

### WebSocket Testing

- **Real-Time Scenarios**: Chat apps, live updates.
- **Tools**: Postman, Socket.io.

### Mocking APIs

- Tools: WireMock, MockServer.
- Use Case: Simulate `500` errors for error-handling tests.

## 8. Interview Q&A Prep

### Common Questions

Q: How do you test paginated APIs?
A: Validate ?page=2&limit=10, check totalPages, and test edge cases (e.g., page=0).

- Q: How to handle dynamic data (e.g., timestamps)?
- A: Use regex or partial matching (e.g., expect(response.id).toMatch(/^\d+$/)).


- Q: Explain testing for rate-limited APIs.
- A: Send concurrent requests and validate 429 Too Many Requests with Retry-After headers.

