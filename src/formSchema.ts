export interface FormField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'textarea';
  label: string;
  placeholder: string;
  required: boolean;
  description?: string;
}

export interface FormSchema {
  id: string;
  title: string;
  description: string;
  version: string;
  fields: FormField[];
}

export const startupFormSchema: FormSchema = {
  id: 'startup-pitch-form',
  title: 'Startup Pitch Form',
  description: 'A form for collecting startup pitch information. This form is accessible to both humans and AI agents.',
  version: '1.0.0',
  fields: [
    {
      id: 'fullName',
      name: 'fullName',
      type: 'text',
      label: 'Full Name',
      placeholder: 'John Doe',
      required: true,
      description: 'The full name of the founder or team lead'
    },
    {
      id: 'email',
      name: 'email',
      type: 'email',
      label: 'Email Address',
      placeholder: 'john@startup.com',
      required: true,
      description: 'Primary contact email'
    },
    {
      id: 'problem',
      name: 'problem',
      type: 'textarea',
      label: 'What problem are you solving?',
      placeholder: 'Describe the problem your startup addresses...',
      required: true,
      description: 'A clear description of the problem or pain point your startup is addressing'
    },
    {
      id: 'valueProposition',
      name: 'valueProposition',
      type: 'textarea',
      label: "What's your unique value proposition?",
      placeholder: 'Explain what makes your solution unique...',
      required: true,
      description: 'Your competitive advantage and what differentiates you from others'
    },
    {
      id: 'traction',
      name: 'traction',
      type: 'textarea',
      label: 'What are your traction metrics?',
      placeholder: 'Share your key metrics, users, revenue, growth...',
      required: true,
      description: 'Current traction including users, revenue, growth rate, or other relevant KPIs'
    }
  ]
};

export interface FormSubmission {
  id: string;
  timestamp: string;
  data: Record<string, string>;
}
