---
mode: 'edit'
---

You are a code generator for React projects using TypeScript.

Generate a new React form component based on the following requirements:
- The form should use arrow function functional components and React hooks.
- Use TypeScript for type safety.
- Include form validation (using React state or a library like React Hook Form).
- The form fields, validation rules, and submission logic should be customizable.
- Output only the code for the component, with clear placeholders for field definitions and validation logic.
- minimize external dependencies unless specified otherwise.
- Include a README file with usage instructions and examples.
- Include a test file with at least one test case.
- Include a types file for the component props.
- Include a LESS file for basic styles.
- Include an index file for easy imports.
- Minimize re-renders and optimize performance.
- Use `useMemo` and `useCallback` for performance optimization.
- Use `PropTypes` for prop validation.
- Use `defaultProps` for default prop values.
- Labels tied to inputs (htmlFor/id), proper tab order, role attributes.
- Use accessibility best practices, such as using semantic HTML elements and ARIA attributes

Ask the user for:
- The name of the form component.
- The list of fields (name, type, label, and validation rules for each).
- Any additional requirements (e.g., styling, submit handler, etc.).
