/**
 * Agent Demo Script
 *
 * This script demonstrates how an AI agent can interact with the form programmatically.
 *
 * To run this demo:
 * 1. Open the application in a browser
 * 2. Open the browser console (F12)
 * 3. Copy and paste this script into the console
 */

console.log('🤖 Starting Agent Demo...\n');

// Step 1: Get the form schema
console.log('Step 1: Getting form schema...');
const schema = window.formAPI.getSchema();
console.log('Schema:', schema);
console.log(`Form has ${schema.fields.length} fields\n`);

// Step 2: Prepare form data based on schema
console.log('Step 2: Preparing form data...');
const agentData = {
  fullName: 'AI Agent Demo',
  email: 'agent@demo.ai',
  problem: 'Many startups struggle with making their web forms accessible to AI agents, limiting automation and integration possibilities.',
  valueProposition: 'We provide a standardized, machine-readable form schema that allows AI agents to understand and interact with web forms programmatically, enabling seamless A2A (Agent-to-Agent) interactions.',
  traction: 'Successfully demonstrated proof of concept with 100% agent accessibility. Forms can be read, filled, and submitted by AI agents without human intervention.'
};
console.log('Agent data prepared:', agentData);
console.log('');

// Step 3: Fill the form
console.log('Step 3: Filling form via API...');
const fillResult = window.formAPI.fillForm(agentData);
console.log('Fill result:', fillResult);
console.log('');

// Wait a moment for visual effect
setTimeout(() => {
  // Step 4: Submit the form
  console.log('Step 4: Submitting form via API...');
  const submitResult = window.formAPI.submitForm(agentData);
  console.log('Submit result:', submitResult);
  console.log('');

  // Step 5: Verify submission
  setTimeout(() => {
    console.log('Step 5: Verifying submission...');
    const submissions = window.formAPI.getSubmissions();
    console.log(`Total submissions: ${submissions.length}`);
    console.log('Latest submission:', submissions[submissions.length - 1]);
    console.log('');

    console.log('✅ Agent demo completed successfully!');
    console.log('');
    console.log('The agent was able to:');
    console.log('  ✓ Discover the form schema');
    console.log('  ✓ Understand required fields');
    console.log('  ✓ Fill out the form programmatically');
    console.log('  ✓ Submit the form');
    console.log('  ✓ Verify the submission');
    console.log('');
    console.log('This demonstrates A2A (Agent-to-Agent) form interaction! 🎉');
  }, 500);
}, 1000);
