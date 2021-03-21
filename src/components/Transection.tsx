import { TransectionType } from '../types'

type TransectionProps = {
  transection: TransectionType
  handleDelete: Function
}

const Transection: React.FC<TransectionProps> = ({
  transection,
  handleDelete,
}) => {
  const sign = transection.amount > 0 ? '+' : '-'

  return (
    <li className={transection.amount > 0 ? 'plus' : 'minus'}>
      {transection.text}{' '}
      <span>
        {sign}${Math.abs(transection.amount)}
      </span>
      <button
        className='delete-btn'
        onClick={() => handleDelete(transection.id)}
      >
        x
      </button>
    </li>
  )
}

export default Transection
