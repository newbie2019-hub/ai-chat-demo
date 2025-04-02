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
  }
];

