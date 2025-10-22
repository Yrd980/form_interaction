# Agent-Accessible Form - A2A Interaction Demo

A proof-of-concept demonstrating **Agent-to-Agent (A2A)** form interactions, where AI agents can programmatically discover, fill, and submit web forms.

## Concept

Traditional web forms are designed only for human interaction. This project explores the future of form interactions where **AI agents** can:

- Discover form structure through machine-readable schemas
- Understand field requirements and validation rules
- Fill and submit forms programmatically
- Integrate seamlessly into agent-driven workflows

This is similar to how ChatGPT connects to Notion and other services, but focused on making forms universally accessible to AI agents.

## Features

### For Humans
- Clean, modern form UI
- 5 fields focused on startup pitch questions:
  - Full Name
  - Email
  - What problem are you solving?
  - What's your unique value proposition?
  - What are your traction metrics?
- View submissions in real-time
- All data stored locally (localStorage)

### For AI Agents
- **JSON Schema** describing form structure
- **Semantic HTML** with proper ARIA labels and IDs
- **JavaScript API** (`window.formAPI`) for programmatic access
- Machine-readable field metadata (types, descriptions, requirements)

## API Reference

The form exposes `window.formAPI` with the following methods:

```javascript
// Get the form schema
const schema = window.formAPI.getSchema();

// Fill the form (updates UI, doesn't submit)
window.formAPI.fillForm({
  fullName: 'John Doe',
  email: 'john@startup.com',
  problem: 'Description of problem...',
  valueProposition: 'Our unique approach...',
  traction: 'Key metrics...'
});

// Submit form data directly (bypasses UI)
window.formAPI.submitForm({
  fullName: 'AI Agent',
  email: 'agent@example.com',
  // ... rest of fields
});

// Get all submissions
const submissions = window.formAPI.getSubmissions();

// Clear all submissions
window.formAPI.clearSubmissions();
```

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Demo: Agent Interaction

1. Start the dev server and open the app in your browser
2. Open browser console (F12)
3. Run the demo script:

```javascript
// Copy the contents of public/agent-demo.js into the console
// OR load it directly:
fetch('/agent-demo.js').then(r => r.text()).then(eval);
```

The demo will:
- ✅ Retrieve the form schema
- ✅ Prepare data based on field requirements
- ✅ Fill the form programmatically
- ✅ Submit the form
- ✅ Verify the submission

## Form Schema Example

```json
{
  "id": "startup-pitch-form",
  "title": "Startup Pitch Form",
  "description": "A form for collecting startup pitch information...",
  "version": "1.0.0",
  "fields": [
    {
      "id": "fullName",
      "name": "fullName",
      "type": "text",
      "label": "Full Name",
      "placeholder": "John Doe",
      "required": true,
      "description": "The full name of the founder or team lead"
    }
    // ... more fields
  ]
}
```

## Technology Stack

- **Vite** - Fast build tool
- **React 18** - UI framework
- **TypeScript** - Type safety
- **localStorage** - Client-side data persistence

## Future Extensions

This POC could be extended with:

- **MCP Server Integration** - Expose form as an MCP tool
- **OpenAPI/Swagger Spec** - REST API for remote submissions
- **Form Builder** - Generate agent-accessible forms dynamically
- **Multi-step Forms** - Agent navigation through complex forms
- **Validation API** - Real-time validation feedback for agents
- **Authentication** - Secure agent access with API keys

## Use Cases

1. **Automated Form Filling** - Agents fill out repetitive forms
2. **Data Collection Pipelines** - Agents submit data from various sources
3. **Testing & QA** - Automated form validation testing
4. **Integration Workflows** - Connect form data to other services
5. **Voice/Chat Interfaces** - Natural language → form submission

## Why This Matters

As AI agents become more prevalent, the web needs to evolve beyond human-only interfaces. Agent-accessible forms enable:

- **Automation** - Reduce manual data entry
- **Integration** - Seamless A2A communication
- **Accessibility** - More ways to interact with services
- **Efficiency** - Faster workflows and processes

This is the future of web interactions - **designed for both humans and agents**.

## License

MIT

---

**Built as a proof-of-concept for A2A (Agent-to-Agent) form interactions**
