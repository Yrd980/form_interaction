import { useState, useEffect } from 'react';
import { startupFormSchema, FormSubmission } from './formSchema';

export function AgentForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [showSchema, setShowSchema] = useState(false);

  useEffect(() => {
    // Load previous submissions from localStorage
    const stored = localStorage.getItem('formSubmissions');
    if (stored) {
      setSubmissions(JSON.parse(stored));
    }

    // Expose form API for agents
    (window as any).formAPI = {
      getSchema: () => startupFormSchema,
      fillForm: (data: Record<string, string>) => {
        setFormData(data);
        return { success: true, message: 'Form filled successfully' };
      },
      submitForm: (data: Record<string, string>) => {
        const submission: FormSubmission = {
          id: crypto.randomUUID(),
          timestamp: new Date().toISOString(),
          data: data
        };

        const existing = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
        const updated = [...existing, submission];
        localStorage.setItem('formSubmissions', JSON.stringify(updated));
        setSubmissions(updated);

        return { success: true, submissionId: submission.id };
      },
      getSubmissions: () => {
        return JSON.parse(localStorage.getItem('formSubmissions') || '[]');
      },
      clearSubmissions: () => {
        localStorage.removeItem('formSubmissions');
        setSubmissions([]);
        return { success: true };
      }
    };
  }, []);

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submission: FormSubmission = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      data: formData
    };

    const updated = [...submissions, submission];
    localStorage.setItem('formSubmissions', JSON.stringify(updated));
    setSubmissions(updated);

    // Clear form
    setFormData({});
    alert('Form submitted successfully!');
  };

  return (
    <div className="container">
      <header className="header">
        <h1>🤖 Agent-Accessible Form</h1>
        <p className="subtitle">A2A (Agent-to-Agent) Form Interaction Demo</p>
      </header>

      <div className="info-section">
        <div className="info-card">
          <h3>💡 For Humans</h3>
          <p>Fill out the form below normally</p>
        </div>
        <div className="info-card">
          <h3>🔧 For AI Agents</h3>
          <p>Use <code>window.formAPI</code> to interact programmatically</p>
          <button onClick={() => setShowSchema(!showSchema)} className="btn-secondary">
            {showSchema ? 'Hide' : 'Show'} Schema
          </button>
        </div>
      </div>

      {showSchema && (
        <div className="schema-display">
          <h3>Form Schema (JSON)</h3>
          <pre>{JSON.stringify(startupFormSchema, null, 2)}</pre>
        </div>
      )}

      <form onSubmit={handleSubmit} className="form" id={startupFormSchema.id}>
        <h2>{startupFormSchema.title}</h2>
        <p className="form-description">{startupFormSchema.description}</p>

        {startupFormSchema.fields.map(field => (
          <div key={field.id} className="form-field">
            <label htmlFor={field.id}>
              {field.label} {field.required && <span className="required">*</span>}
            </label>
            {field.description && (
              <p className="field-description">{field.description}</p>
            )}
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                rows={5}
                aria-describedby={`${field.id}-description`}
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                aria-describedby={`${field.id}-description`}
              />
            )}
          </div>
        ))}

        <button type="submit" className="btn-primary">Submit Pitch</button>
      </form>

      {submissions.length > 0 && (
        <div className="submissions-section">
          <div className="submissions-header">
            <h2>Submissions ({submissions.length})</h2>
            <button
              onClick={() => {
                localStorage.removeItem('formSubmissions');
                setSubmissions([]);
              }}
              className="btn-secondary"
            >
              Clear All
            </button>
          </div>

          {submissions.map(submission => (
            <div key={submission.id} className="submission-card">
              <div className="submission-meta">
                <span className="submission-id">ID: {submission.id.slice(0, 8)}</span>
                <span className="submission-time">
                  {new Date(submission.timestamp).toLocaleString()}
                </span>
              </div>
              <div className="submission-data">
                <pre>{JSON.stringify(submission.data, null, 2)}</pre>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="api-reference">
        <h3>🔌 Agent API Reference</h3>
        <div className="api-methods">
          <div className="api-method">
            <code>window.formAPI.getSchema()</code>
            <p>Returns the form schema</p>
          </div>
          <div className="api-method">
            <code>window.formAPI.fillForm(data)</code>
            <p>Pre-fills the form with data</p>
          </div>
          <div className="api-method">
            <code>window.formAPI.submitForm(data)</code>
            <p>Submits form data directly</p>
          </div>
          <div className="api-method">
            <code>window.formAPI.getSubmissions()</code>
            <p>Retrieves all submissions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
