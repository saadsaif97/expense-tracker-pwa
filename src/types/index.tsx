export type TransectionType = {
  id?: number
  text: string
  amount: number
}

export type TransectionContextType = {
  transections: TransectionType[]
  addTransection: Function
  deleteTransection: Function
}
