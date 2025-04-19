export const VALID_COMMANDS: string[] = [
  "about",
  "experience",
  "projects",
  "education",
  "resume"
] as const

export type Command = typeof VALID_COMMANDS[number]