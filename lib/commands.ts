export const VALID_COMMANDS: string[] = [
  "about",
  "experience",
  "projects",
] as const

export type Command = typeof VALID_COMMANDS[number]