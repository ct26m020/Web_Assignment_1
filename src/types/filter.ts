export const Filter = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  DONE: 'DONE',
} as const;


export type Filter = typeof Filter[keyof typeof Filter];