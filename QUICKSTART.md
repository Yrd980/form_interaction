# Quick Start Guide

## Run the Application

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

## Try the Agent Demo

1. Open the app in your browser
2. Open the browser console (Press F12)
3. Run this command:

```javascript
fetch('/agent-demo.js').then(r => r.text()).then(eval);
```

OR copy/paste the contents of `public/agent-demo.js` into the console.

## Manual Agent Testing

Try these commands in the browser console:

```javascript
// View the form schema
console.log(window.formAPI.getSchema());

// Fill the form
window.formAPI.fillForm({
  fullName: 'Test User',
  email: 'test@example.com',
  problem: 'Testing agent interaction',
  valueProposition: 'Proving A2A works',
  traction: 'Successfully demonstrated'
});

// Submit directly
window.formAPI.submitForm({
  fullName: 'Agent Smith',
  email: 'agent@matrix.com',
  problem: 'Humans filling forms manually',
  valueProposition: 'Automated form submission',
  traction: '100% automation rate'
});

// View all submissions
console.log(window.formAPI.getSubmissions());

// Clear submissions
window.formAPI.clearSubmissions();
```

## What Makes This Agent-Accessible?

1. **Discoverable Schema** - `window.formAPI.getSchema()` returns complete form structure
2. **Semantic HTML** - Proper IDs, labels, and ARIA attributes
3. **Programmatic API** - Agents can fill/submit without DOM manipulation
4. **Machine-Readable Metadata** - Field types, requirements, descriptions
5. **JSON Storage** - All data in standard JSON format

This POC proves that forms can be designed for both human and AI agent interaction!
