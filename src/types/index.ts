export type Role = 'user' | 'assistant'
export type Messages = {
  id: number,
  message: string;
  role: Role,
  temporary?: boolean
}

export type userQuery = { query: string; file: File[] }