import { TransectionType } from '../types'

export default function transectionReducer(
  transections: TransectionType[],
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case 'ADD_TRANSECTION':
      return [action.payload, ...transections]
    case 'DELETE_TRANSECTION':
      return [
        ...transections.filter(
          (transection) => transection.id !== action.payload
        ),
      ]

    default:
      return [...transections]
  }
}
