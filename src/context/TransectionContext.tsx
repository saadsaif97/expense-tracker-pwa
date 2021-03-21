import { createContext, useReducer } from 'react'
import transectionReducer from './transection-reducer'
import { TransectionType, TransectionContextType } from '../types'

let transections: TransectionType[] = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 },
]

export const TransectionContext = createContext<TransectionContextType>({
  transections,
  addTransection: () => console.log('not defined yet'),
  deleteTransection: () => console.log('not defined yet'),
})

// creating the context provider component
export const TransectionContextProvider: React.FC = (props: any) => {
  const [state, dispatch] = useReducer(transectionReducer, transections)

  // add transection
  function addTransection(transection: TransectionType) {
    dispatch({
      type: 'ADD_TRANSECTION',
      payload: transection,
    })
  }
  // delete transection
  function deleteTransection(id: number) {
    dispatch({
      type: 'DELETE_TRANSECTION',
      payload: id,
    })
  }

  return (
    <TransectionContext.Provider
      value={{
        transections: state,
        addTransection,
        deleteTransection,
      }}
    >
      {props.children}
    </TransectionContext.Provider>
  )
}
