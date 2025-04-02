import type { Messages } from "@/types"

export const promptExamples = [
  {
    prompt: 'Create a Vue 3 component using the Composition API',
    icon: 'mdi:question-mark-circle-outline'
  },
  {
    prompt: 'Generate an email to reply to a job offer',
    icon: 'mdi:email-sync-outline'
  },
  {
    prompt: 'How does AI work in the background?',
    icon: 'mdi:reload'
  },
  {
    prompt: 'Analyze the following text and summarize it in 3 sentences: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "',
    icon: 'mdi:lightbulb-on-outline'
  },
]

export const messages: Messages[] = [
  {
    id: 1,
    role: "user",
    message: "Hey, can you help me with a project I'm working on?"
  },
  {
    id: 2,
    role: "assistant",
    message: "Of course! What project are you working on?"
  },
  {
    id: 3,
    role: "user",
    message: "It's a presentation about artificial intelligence."
  },
  {
    id: 4,
    role: "assistant",
    message: "That sounds interesting! How can I assist you with it?"
  },
  {
    id: 5,
    role: "user",
    message: "I'm looking to cover the history and applications of AI in different industries."
  },
  {
    id: 6,
    role: "assistant",
    message: "Great topic! You could discuss AI in fields like healthcare, finance, and manufacturing."
  },
  {
    id: 7,
    role: "user",
    message: "Yeah, I was thinking of focusing on healthcare and how AI is transforming patient care."
  },
  {
    id: 8,
    role: "assistant",
    message: "That's a fantastic angle. You can talk about AI in diagnostics, personalized medicine, and robotic surgeries."
  },
  {
    id: 9,
    role: "user",
    message: "Definitely! I also want to touch on AI ethics and the challenges of integrating AI into healthcare."
  },
  {
    id: 10,
    role: "assistant",
    message: "AI ethics is crucial. You could mention issues like data privacy, bias in algorithms, and the need for regulation."
  }
];

